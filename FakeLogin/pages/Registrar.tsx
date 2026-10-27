import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Registrar = () => {
  return (
    <View style={styles.tela}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Crie sua conta</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu Email'
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder='Crie sua senha'
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotao}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Registrar

const styles = StyleSheet.create({
    tela: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#F2F4F8',
    },
    container: {
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
      marginBottom: 24,
    },
    input: {
      height: 50,
      backgroundColor: '#F9FAFB',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      paddingHorizontal: 14,
      fontSize: 16,
      color: '#111827',
      marginBottom: 14,
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
    textoBotao: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
})