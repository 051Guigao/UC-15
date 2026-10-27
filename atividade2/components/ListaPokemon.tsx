import { useState, useEffect } from 'react'
import {
  FlatList, Text, View, ActivityIndicator, StyleSheet, TextInput,
} from 'react-native'
import Card from './Card'

interface Pokemon {
  id: number
  nome: string
  tipo: string
  image: string
}

const ListaPokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [termo, setTermo] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const buscar = async () => {
      try {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
        if (!resposta.ok) throw new Error('Falha na requisição')
        const dados = await resposta.json()

        const lista: Pokemon[] = await Promise.all(
          dados.results.map(async (poke: { name: string; url: string }) => {
            const resp = await fetch(poke.url)
            const dado = await resp.json()
            return {
              id: dado.id,
              nome: dado.name,
              tipo: dado.types.map((res: any) => res.type.name).join(', '),
              image: dado.sprites.front_default,
            }
          })
        )

        setPokemons(lista)
      } catch (e) {
        setErro('Não foi possível carregar os Pokémons.')
      } finally {
        setCarregando(false)
      }
    }
    buscar()
  }, [])

  const pokemonFiltrado = pokemons.filter((p) =>
    p.nome.toLowerCase().includes(termo.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar Pokémon</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu pokémon"
        value={termo}
        onChangeText={setTermo}
        autoCapitalize="none"
      />

      {carregando ? (
        <ActivityIndicator size="large" />
      ) : erro ? (
        <Text>{erro}</Text>
      ) : (
        <FlatList
          data={pokemonFiltrado}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card
              id={String(item.id)}
              nome={item.nome}
              tipo={item.tipo}
              image={item.image}
            />
          )}
          ListEmptyComponent={<Text>Nenhum Pokémon encontrado</Text>}
        />
      )}
    </View>
  )
}

export default ListaPokemon

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 12,
  },
})
