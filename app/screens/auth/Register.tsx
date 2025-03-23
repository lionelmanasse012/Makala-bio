import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link } from 'expo-router';
import { CheckSquare, Square } from 'lucide-react-native';

export default function Register() {
  const [accountType, setAccountType] = useState('menage');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Ajoutez ici la logique pour traiter l'inscription
    console.log('Inscription en cours...');
  };

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
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
    },
    radioLabel: {
      fontSize: 16,
      color: '#4A5568',
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
    signupButton: {
      backgroundColor: '#16A349',
      paddingVertical: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 24,
    },
    signupButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
    },
    loginLink: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    loginLinkText: {
      color: '#16A349',
      fontWeight: '500',
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Remplissez le formulaire ci-dessous pour vous inscrire</Text>

        {/* Type de compte */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Type de compte</Text>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setAccountType('menage')}
          >
            {accountType === 'menage' ? (
              <CheckSquare size={20} color="#16A349" />
            ) : (
              <Square size={20} color="#4A5568" />
            )}
            <Text style={styles.radioLabel}>Ménage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setAccountType('collecteur')}
          >
            {accountType === 'collecteur' ? (
              <CheckSquare size={20} color="#16A349" />
            ) : (
              <Square size={20} color="#4A5568" />
            )}
            <Text style={styles.radioLabel}>Collecteur</Text>
          </TouchableOpacity>
        </View>

        {/* Nom complet */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nom complet</Text>
          <TextInput
            style={styles.input}
            placeholder="Jean Dupont"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

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

        {/* Téléphone */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Téléphone</Text>
          <TextInput
            style={styles.input}
            placeholder="+243 9X XXXX XXXX"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Adresse */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Adresse</Text>
          <TextInput
            style={styles.input}
            placeholder="123 Avenue, Quartier, Ville"
            value={address}
            onChangeText={setAddress}
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
        </View>

        {/* Confirmer le mot de passe */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Confirmer le mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmer le mot de passe"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Bouton S'inscrire */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>S'inscrire</Text>
        </TouchableOpacity>

        {/* Lien vers la connexion */}
        <View style={styles.loginLink}>
          <Text>Déjà un compte? </Text>
          <Link href="/screens/auth/Login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLinkText}>Se connecter</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}