import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Home, QrCode, BarChart, User, Bell, Award } from "lucide-react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // Importation du Tab Navigator
import { NavigationContainer } from '@react-navigation/native';  // Importation du Navigation Container

// Importation des autres écrans si nécessaires
import HouseholdProfil from './Profile'; // Si tu as d'autres écrans à intégrer dans les tabs

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#16A349',
          tabBarInactiveTintColor: 'gray',
          header: () => <Navbar />  // Ajouter Navbar en haut de chaque tab
        }}
      >
        <Tab.Screen
          name="Home"
          component={HouseholdProfil}  // Écran principal pour la section "Accueil"
          options={{ tabBarIcon: ({ color }) => <Home color={color} /> }}
        />
        <Tab.Screen
          name="Request"
          component={HouseholdProfil}  // Un autre écran à définir pour les demandes
          options={{ tabBarIcon: ({ color }) => <QrCode color={color} /> }}
        />
        <Tab.Screen
          name="Points"
          component={HouseholdProfil}  // Un autre écran pour les points
          options={{ tabBarIcon: ({ color }) => <BarChart color={color} /> }}
        />
        <Tab.Screen
          name="Profile"
          component={HouseholdProfil}  // Un autre écran pour le profil
          options={{ tabBarIcon: ({ color }) => <User color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Composant Navbar déjà défini
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.button}>
        <Bell color="white" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <User color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#16A349',
    padding: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  // Ajoute d'autres styles nécessaires
});

export default Dashboard;
