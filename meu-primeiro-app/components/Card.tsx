import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CardProps {
  titulo: string;
  preco: number;
  promocao: boolean;
  onComprar: () => void;
}

const Card = ({titulo, preco, onComprar,promocao}:CardProps) => {
  return (
    <View style={styles.container}>
    <Text style={styles.texto}> {titulo} </Text>
    <Text>R$ {preco} </Text>
    <TouchableOpacity onPress={onComprar}>
      <Text style={styles.botao}>Comprar</Text>  
    </TouchableOpacity>
     {promocao && <Text style={styles.selo}>Promoção</Text>}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        borderRadius: 15,
        padding: 10,
        gap: 10
    },
    texto:{
        color: 'white',
        textAlign: 'center'
    },
    botao:{
        backgroundColor: 'red',
        borderRadius: 50,
        paddingVertical: 5
    },
    foto:{
        width:64,
        height:64,
    },
    selo:{
      backgroundColor: '#2d3748',
      color:'white',
      borderRadius:20,
      padding:5
    }

})