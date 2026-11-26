import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function NovaPublicacao() {
  const [fotos, setFotos] = useState<string[]>([]);
  const [fotoAtual, setFotoAtual] = useState(0);
  const [legenda, setLegenda] = useState('');

  async function escolherDaGaleria() {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      selectionLimit: 5,
      quality: 0.8,
    });

    if (!resultado.canceled) {
      const uris = resultado.assets.map((asset) => asset.uri);
      setFotos(uris);
      setFotoAtual(0);
    }
  }

  async function tirarFoto() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à câmera.');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!resultado.canceled) {
      const novasFotos = [...fotos, resultado.assets[0].uri];
      setFotos(novasFotos);
      setFotoAtual(novasFotos.length - 1);
    }
  }

  function compartilhar() {
    if (fotos.length === 0) {
      Alert.alert('Ops', 'Selecione pelo menos uma foto.');
      return;
    }

    Alert.alert('Publicação compartilhada!', 'Sua publicação foi compartilhada com sucesso.');
    setFotos([]);
    setFotoAtual(0);
    setLegenda('');
  }

  function cancelar() {
    setFotos([]);
    setFotoAtual(0);
    setLegenda('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={cancelar}>
          <Text style={styles.fechar}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.tituloCabecalho}>Nova publicação</Text>
        <TouchableOpacity onPress={compartilhar}>
          <Text style={styles.compartilharTexto}>Compartilhar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.preview}>
          {fotos.length > 0 ? (
            <Image source={{ uri: fotos[fotoAtual] }} style={styles.previewImagem} />
          ) : (
            <Text style={styles.previewVazio}>Nenhuma foto selecionada</Text>
          )}

          {fotos.length > 1 && (
            <View style={styles.contador}>
              <Text style={styles.contadorTexto}>
                {fotoAtual + 1}/{fotos.length}
              </Text>
            </View>
          )}
        </View>

        {fotos.length > 0 && (
          <ScrollView horizontal style={styles.miniaturas}>
            {fotos.map((uri, index) => (
              <TouchableOpacity key={index} onPress={() => setFotoAtual(index)}>
                <Image
                  source={{ uri }}
                  style={[styles.miniatura, index === fotoAtual && styles.miniaturaSelecionada]}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={escolherDaGaleria}>
            <Text style={styles.botaoTexto}>Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
            <Text style={styles.botaoTexto}>Câmera</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.legendaArea}>
          {fotos.length > 0 && (
            <Image source={{ uri: fotos[0] }} style={styles.legendaMiniatura} />
          )}
          <TextInput
            style={styles.legendaInput}
            placeholder="Escreva uma legenda..."
            placeholderTextColor="#8e8e8e"
            value={legenda}
            onChangeText={setLegenda}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.botaoCompartilhar} onPress={compartilhar}>
          <Text style={styles.botaoCompartilharTexto}>Compartilhar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#262626',
  },
  fechar: {
    color: '#fff',
    fontSize: 22,
  },
  tituloCabecalho: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  compartilharTexto: {
    color: '#0095f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  preview: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImagem: {
    width: '100%',
    height: '100%',
  },
  previewVazio: {
    color: '#8e8e8e',
  },
  contador: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  contadorTexto: {
    color: '#fff',
    fontSize: 12,
  },
  miniaturas: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  miniatura: {
    width: 70,
    height: 70,
    marginRight: 6,
    borderRadius: 4,
    opacity: 0.6,
  },
  miniaturaSelecionada: {
    opacity: 1,
    borderWidth: 2,
    borderColor: '#0095f6',
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  botao: {
    flex: 1,
    backgroundColor: '#262626',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  legendaArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#262626',
  },
  legendaMiniatura: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  legendaInput: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
    minHeight: 50,
  },
  botaoCompartilhar: {
    backgroundColor: '#0095f6',
    margin: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoCompartilharTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
