import { useState, useEffect } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const Busca = () => {
  const [termo, setTermo] = useState<string>('')

  useEffect(() => {
    if (termo.length === 0) return
    console.log('Buscando por:', termo)
    // aqui entraria uma chamada de API, por exemplo
  }, [termo])

  return (
    <View>
      <TextInput
        style={styles.input}
        value={termo}
        onChangeText={setTermo}
        placeholder="Buscar produto..."
      />
    </View>
  )
}

export default Busca

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
})