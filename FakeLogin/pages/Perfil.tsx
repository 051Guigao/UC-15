import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Perfil = () => {
  return (
    <View style={styles.container}>
    <Image  style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/3736/3736502.png'}}/>
    
      <Text style={styles.titulo}>Suas informações</Text>
      <Text style={styles.texto}>Nome</Text>
      <Text style={styles.texto}>Email</Text>
      <Text style={styles.texto}>CPF</Text>
      <TouchableOpacity
      style={styles.botao}
      activeOpacity={0.7}
    
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      backgroundColor: '#F2F4F8',
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: '#4F46E5',
      marginBottom: 16,
    },
    titulo: {
      fontSize: 24,
      fontWeight: '700',
      color: '#111827',
      marginBottom: 20,
    },
    texto: {
      alignSelf: 'stretch',
      fontSize: 16,
      fontWeight: '600',
      color: '#374151',
      backgroundColor: '#fff',
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 4,
    },
    botao: {
      alignSelf: 'stretch',
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