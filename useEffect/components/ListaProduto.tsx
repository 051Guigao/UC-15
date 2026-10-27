import { useState, useEffect } from 'react'
import { FlatList, Text, View, ActivityIndicator, StyleSheet } from 'react-native'

interface Produto {
  id: number;
  title: string;
}

const ListaProdutos = () => {
    //Array de produtos
  const [produtos, setProdutos] = useState<Produto[]>([])
  //Booleana que verifica se aparece o carregamento ou não
  const [carregando, setCarregando] = useState<boolean>(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados)
        setCarregando(false)
      })
  }, [])

  if (carregando) {
    return <ActivityIndicator size="large" />
  }

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.linha}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  )
}

export default ListaProdutos

const styles = StyleSheet.create({
  linha: { padding: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
})