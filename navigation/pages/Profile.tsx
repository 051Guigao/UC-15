import { View, Text, Button } from 'react-native'

export default function Profile({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Pagina de Registro"
        onPress={() => navigation.navigate('Registro')}
      />
    </View>
  )
}