import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Atividade from './components/Atividade';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:"red"
  }
});
