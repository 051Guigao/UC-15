import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Registro from './pages/Registro'


// Cria o objeto da navegaçao
// Atraves dele vamos ter os metodos necessarios
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    // Componente que envolve os outros
    <NavigationContainer>
      {/* Componente que indica que vamos trabalhar
      com navegaçao por pilhas/stack 
      InitialRouteName indica qual é a tela que vai aparecer primeiro*/
      }
      <Stack.Navigator initialRouteName="Home">
        {/* Dentro de Stack.Navigator ficam as Stack.Screen
        elas representam cada tela de navegaçao
        Cada uma tem nome e qual pagina ela representa */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>

      <Tab.Navigator>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

function createBottomTabNavigator() {
  throw new Error('Function not implemented.')
}
