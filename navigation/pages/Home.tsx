import { View, Text, Button, StyleSheet } from 'react-native'



export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir para Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Ir para Registro"
        onPress={() => navigation.navigate('Registro')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})