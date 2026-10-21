import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Atividade = () => {
  return (
    <View style={styles.container}>
      <Image
      source={{uri: 'https://images.steamusercontent.com/ugc/448485196874316834/B193EF38570FFEF7FDF18109EE7600EC49A9D6FC/?imw=1024&imh=394&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'}}
      style={styles.foto}
      />
      
      <Text style={styles.texto}> Irithyll Of The Boreal Valley</Text>
      <Text style={styles.texto}> Cidade do jogo DS3</Text>

      <TouchableOpacity style={styles.botao}
      onPress={() => alert('Bait :/')}>
      <Text style={styles.textobtn}>Saiba Mais</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Atividade

const styles = StyleSheet.create({
    foto:{
        width:200,
        height:50,
    },
    texto:{
        color: 'cyan',
        textAlign: 'center'
    },
    container:{
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    gap: 10
    },
    botao:{
        backgroundColor: 'cyan',
        borderRadius: 50,
        paddingVertical: 5
    },
    textobtn:{
        color: 'white',
        textAlign: 'center'
    },
})