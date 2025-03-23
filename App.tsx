import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/app/screens/Home'; // Composant d'accueil
import HouseholdHome from '@/app/screens/household/Home'; // Autre écran
import AdminHome from '@/app/screens/admin/Home'; // Autre écran

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        {/* Chaque Screen doit être ajouté de cette manière */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HouseholdHome" component={HouseholdHome} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
      </Stack.Navigator>
  );
}
