
import { produtos } from "../data/produtos";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import Card from "./Card";

 export const Busca = () => {
 const [termo, setTermo] = useState("")

 const produtosFiltrados = produtos.filter((produto) => 
    produto.titulo.toLowerCase().includes(termo.toLowerCase())
 )


 return(
    <View>
        <Text> Buscar Produto </Text>

        <TextInput
        placeholder="Digite seu produto"
        value={termo}
        onChangeText={setTermo}
        />

        <FlatList
        data={produtosFiltrados}
        keyExtractor={(produto) => produto.id}
        renderItem={({item}) => (
            <View>
                    <Card titulo={item.titulo}image={item.image}preco={item.preco}id={item.id} />
            </View> 
        )}
        ListEmptyComponent={
            <Text> Nenhum Produto Encontrado </Text>
        }
        />
    </View>
              
 )
}

