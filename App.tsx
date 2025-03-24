import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, User, FileText, ChartBar, Clock, Bell, HomeIcon, QrCode } from 'lucide-react-native'
import HomePage from '@/app/screens/Home';
import Login from '@/app/screens/auth/Login';
import Register from '@/app/screens/auth/Register';
import HouseholdHome from '@/app/screens/household/Home';
import HouseholdRequest from '@/app/screens/household/Tabs/Request';
import AdminHome from '@/app/screens/admin/Home';
import Navbar from './components/Navbar';
import Users from './app/screens/admin/Tabs/Users';
import Notifications from './app/screens/admin/Tabs/Notifications';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator()

const TabNavigatorHouseHold = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#16A349',
        tabBarInactiveTintColor: 'gray',
        header: () => <Navbar />,
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HouseholdHome}
        options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }}
      />
      <Tab.Screen
        name="Demande"
        component={HouseholdRequest}
        options={{ tabBarIcon: ({ color }) => <QrCode color={color} /> }}
      />
      <Tab.Screen
        name="Points"
        component={Users}
        options={{ tabBarIcon: ({ color }) => <ChartBar color={color} /> }}
      />
      <Tab.Screen
        name="Profil"
        component={Notifications}
        options={{ tabBarIcon: ({ color }) => <User color={color} /> }}
      />
    </Tab.Navigator>
  )
}

const TabNavigatorAdmin = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#16A349',
        tabBarInactiveTintColor: 'gray',
        header: () => <Navbar />,
      }}
    >
      <Tab.Screen
        name="Tableau"
        component={AdminHome}
        options={{ tabBarIcon: ({ color }) => <ChartBar color={color} /> }}
      />
      <Tab.Screen
        name="Utilisateurs"
        component={Users}
        options={{ tabBarIcon: ({ color }) => <User color={color} /> }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarIcon: ({ color }) => <Bell color={color} /> }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      {/* Chaque Screen doit être ajouté de cette manière */}
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HouseholdHome" component={TabNavigatorHouseHold} />
      <Stack.Screen name="AdminHome" component={TabNavigatorAdmin} />
    </Stack.Navigator>
  );
}
