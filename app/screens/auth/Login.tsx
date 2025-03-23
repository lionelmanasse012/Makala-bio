import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 24,
      backgroundColor: '#F7FAFC',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1A202C',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: '#4A5568',
      marginBottom: 24,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#2D3748',
      marginBottom: 8,
    },
    input: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#E2E8F0',
      fontSize: 16,
    },
    forgotPassword: {
      color: '#16A349',
      fontSize: 14,
      marginTop: 8,
      textAlign: 'right',
    },
    loginButton: {
      backgroundColor: '#16A349',
      paddingVertical: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 24,
    },
    loginButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
    },
    signupLink: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    signupLinkText: {
      color: '#16A349',
      fontWeight: '500',
    },
  });

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique pour traiter la connexion
    console.log('Connexion en cours...');
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <Text style={styles.subtitle}>Entrez vos identifiants pour accéder à votre compte</Text>

      {/* Email */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="exemple@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Mot de passe */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Mot de passe oublié?</Text>
        </TouchableOpacity>
      </View>

      {/* Bouton Se connecter */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Lien vers l'inscription */}
      <View style={styles.signupLink}>
        <Text>Pas encore de compte? </Text>
        <Link href="/screens/auth/Register" asChild>
          <TouchableOpacity>
            <Text style={styles.signupLinkText}>S'inscrire</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}