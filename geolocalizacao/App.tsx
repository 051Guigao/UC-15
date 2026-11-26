import { StyleSheet, View } from 'react-native';
import {MapaTempoReal} from './components/MapaTempoReal';

const App = () => {
  return (
    <View style={styles.container}>
      <MapaTempoReal />
    </View> 
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
