import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

interface CardProps {
  id: string,
  image: string
  titulo: string;
  preco: number;
}

const Card = ({ id, image, titulo, preco,  }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image}/>
      <Text style={styles.texto}>{titulo}</Text>
      <Text>
        R$ {preco}
      </Text>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  promocao: {
    color: "red",
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#007AFF",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150
}
});

export default Card;