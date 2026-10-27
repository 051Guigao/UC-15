import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Busca from './components/Busca';
import ListaPokemon from './components/ListaPokemon';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ListaPokemon/>
    </SafeAreaView>
  </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
