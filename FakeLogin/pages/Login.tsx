import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Profile({ navigation }: any) {
    return (
    <View style={styles.tela}>
    <View style={styles.card}>
    <Text style={styles.titulo}>Bem-vindo de volta</Text>
    <Text style={styles.subtitulo}>Efetue o login em sua conta</Text>

<TextInput
  style={styles.input}
  placeholder='Digite seu Email'
  placeholderTextColor="#9CA3AF"
/>
 <TextInput
  style={styles.input}
  secureTextEntry
  placeholder='Digite sua senha'
  placeholderTextColor="#9CA3AF"
/>

<TouchableOpacity
  style={styles.botao}
  activeOpacity={0.7}
  onPress={() => navigation.navigate('Perfil')}
  >
  <Text style={styles.textoBotao}>Entrar</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.botao}
  activeOpacity={0.7}
  onPress={() => navigation.navigate('Registrar')}
  >
  <Text style={styles.textoBotao}>Crie uma conta</Text>
</TouchableOpacity>
      </View>
    </View>
     
    )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      margin: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      elevation: 3,
    },
    botao: {
      height: 50,
      backgroundColor: '#4F46E5',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 12,
      elevation: 3,
      shadowColor: '#4F46E5',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      },
      input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
        padding: 10, marginBottom: 12,
      },
      textoBotao: { color: '#fff', textAlign: 'center', fontWeight: '600' },
      tela: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F2F4F8',
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      titulo: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        textAlign: 'center',
      },
      subtitulo: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 4,
        marginBottom: 24,
      },
      
  
})