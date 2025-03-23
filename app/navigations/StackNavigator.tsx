import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}
