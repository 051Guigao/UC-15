import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.mancha, styles.manchaTopo]} />
      <View style={[styles.mancha, styles.manchaBase]} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.conteudo}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topo}>
            <Image
              source={require('../assets/logo_vibe.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.slogan}>Seu mundo, suas conexões.</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.campo}>
              <Ionicons name="mail-outline" size={22} color="#FFFFFF" />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="rgba(255,255,255,0.7)"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.campo}>
              <Ionicons name="lock-closed-outline" size={22} color="#FFFFFF" />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry={!mostrarSenha}
                autoCapitalize="none"
                value={senha}
                onChangeText={setSenha}
              />
              <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Ionicons
                  name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>

            <Pressable style={styles.esqueceu}>
              <Text style={styles.esqueceuTexto}>Esqueceu a senha?</Text>
            </Pressable>

            <Pressable style={styles.botao}>
              <Text style={styles.botaoTexto}>Entrar</Text>
            </Pressable>

            <View style={styles.divisor} />

            <View style={styles.rodape}>
              <Text style={styles.rodapeTexto}>Não tem conta?</Text>
              <Pressable>
                <Text style={styles.rodapeLink}>Criar conta</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1B0B36', overflow: 'hidden' },
  conteudo: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },

  mancha: { position: 'absolute', borderRadius: 999 },
  manchaTopo: {
    top: -120,
    left: -100,
    width: 280,
    height: 280,
    backgroundColor: '#9B36E8',
    opacity: 0.45,
  },
  manchaBase: {
    bottom: -110,
    right: -90,
    width: 260,
    height: 260,
    backgroundColor: '#FF647C',
    opacity: 0.35,
  },

  topo: { alignItems: 'center', gap: 4 },
  logo: { width: 260, height: 110 },
  slogan: { fontSize: 18, color: '#FFFFFF' },

  card: {
    marginTop: 48,
    padding: 24,
    gap: 16,
    borderRadius: 40,
    backgroundColor: 'rgba(112, 71, 235, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(155, 54, 232, 0.6)',
  },
  campo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    height: 58,
    paddingHorizontal: 20,
    borderRadius: 29,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  input: { flex: 1, fontSize: 17, color: '#FFFFFF' },

  esqueceu: { alignSelf: 'flex-end' },
  esqueceuTexto: { color: '#FF8979', fontSize: 15 },

  botao: {
    height: 62,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF647C',
    shadowColor: '#FF8979',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },
  botaoTexto: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },

  divisor: { height: 1, backgroundColor: 'rgba(255,255,255,0.15)' },
  rodape: { flexDirection: 'row', justifyContent: 'center', gap: 6 },
  rodapeTexto: { color: '#FFFFFF', fontSize: 16 },
  rodapeLink: { color: '#FF8979', fontSize: 16, fontWeight: 'bold' },
});
