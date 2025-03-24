import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LogIn, UserPlus, Recycle } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation-types'


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: '#F7FAFC', // Fond léger et doux
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3748', // Couleur de texte foncée
  },
  heroSection: {
    marginBottom: 48,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A202C', // Titre foncé
    marginBottom: 16,
  },
  heroDescription: {
    fontSize: 18,
    color: '#4A5568', // Texte secondaire
    textAlign: 'center',
    lineHeight: 28, // Espacement des lignes
  },
  buttonContainer: {
    gap: 16,
  },
  buttonPrimary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#16A349', // Couleur primaire
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 2, // Ombre légère
  },
  buttonSecondary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF', // Fond blanc
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0', // Bordure légère
    elevation: 2, // Ombre légère
  },
  buttonText: {
    color: '#FFFFFF', // Texte blanc
    fontSize: 16,
    fontWeight: '500',
  },
  buttonTextSecondary: {
    color: '#2D3748', // Texte foncé
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    color: '#FFFFFF', // Icône blanche
  },
  iconSecondary: {
    color: '#2D3748', // Icône foncée
  },
});

export default function Index() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Recycle size={48} color="#16A349" />
          <Text style={styles.logoText}>E-Butshafu</Text>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Gestion des déchets simplifiée</Text>
        <Text style={styles.heroDescription}>
          Connectez les ménages aux collecteurs pour un environnement plus propre et plus durable.
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('Login')}
        >
          <LogIn size={20} color={styles.iconSecondary.color} />
          <Text style={styles.buttonTextSecondary}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('HouseholdHome')}
        >
          <UserPlus size={20} color={styles.icon.color} />
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
