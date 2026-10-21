import { FlatList, Text, View, StyleSheet } from 'react-native'
import Card from './Card';
import { produtos } from '../data/produtos';

const ListaProdutos = () => {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.linha}>
          <Card titulo={item.titulo}image={item.image}preco={item.preco}id={item.id} />
        </View>
      )}
    />
  )
}

export default ListaProdutos

const styles = StyleSheet.create({
  linha: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titulo: { fontWeight: 'bold' },
})