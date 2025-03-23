import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, User, FileText } from 'lucide-react-native'
import AdminHome from '../screens/admin/Home'
import CollectorsHome from '../screens/collectors/Home'
import HouseholdHome from '../screens/household/Home'
import Navbar from '../../components/Navbar'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#16A349',
                tabBarInactiveTintColor: 'gray',
                header: () => <Navbar />,
            }}
        >
            <Tab.Screen
                name="Admin"
                component={AdminHome}
                options={{ tabBarIcon: ({ color }) => <Home color={color} /> }}
            />
            <Tab.Screen
                name="Collectors"
                component={CollectorsHome}
                options={{ tabBarIcon: ({ color }) => <FileText color={color} /> }}
            />
            <Tab.Screen
                name="Household"
                component={HouseholdHome}
                options={{ tabBarIcon: ({ color }) => <User color={color} /> }}
            />
        </Tab.Navigator>
    )
}
