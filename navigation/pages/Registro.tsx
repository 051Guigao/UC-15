import { View, Text, Button } from 'react-native'

export default function Registro ({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registro</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}