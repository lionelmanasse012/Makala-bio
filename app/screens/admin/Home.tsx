import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StatCard from '@/components/StatCard';
import ListItem from '@/components/ListItem';
import { theme } from '@/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: theme.colors.text,
    fontFamily: theme.fonts.primary,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    marginTop: 8,
    fontFamily: theme.fonts.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
    fontFamily: theme.fonts.primary,
  },
  chart: {
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  listContainer: {
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  seeAllButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.primary, 
  },
  seeAllText: {
    color: theme.colors.white, // 
    fontWeight: '600',
    fontFamily: theme.fonts.primary,
  },
});

export default function AdminDashboard() {
  const barData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        data: [200, 450, 280, 800, 990, 400],
      },
    ],
  };

  const pieData = [
    {
      name: 'Déchets triés',
      population: 78.5,
      color: theme.colors.primary,
      legendFontColor: theme.colors.textSecondary,
      legendFontSize: 12,
    },
    {
      name: 'Déchets non triés',
      population: 21.5,
      color: theme.colors.secondary,
      legendFontColor: theme.colors.textSecondary,
      legendFontSize: 12,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>E-Butshafu</Text>
        <Text style={styles.subtitle}>Tableau de bord</Text>
      </View>

      <View style={styles.statsContainer}>
        <StatCard title="Total collectes" value="1,248" change="+12% ce mois" iconName="collections" />
        <StatCard title="Taux réussite" value="94.2%" change="+2.1% ce mois" iconName="trending-up" />
        <StatCard title="Déchets triés" value="78.5%" change="+5.4% ce mois" iconName="recycling" />
        <StatCard title="Utilisateurs" value="573" change="+24 nouveaux" iconName="people" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Collectes par mois</Text>
        <BarChart
          data={barData}
          width={width - 40}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: theme.colors.white,
            backgroundGradientFrom: theme.colors.white,
            backgroundGradientTo: theme.colors.white,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(22, 163, 73, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(74, 85, 104, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Déchets triés vs non triés</Text>
        <PieChart
          data={pieData}
          width={width - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(74, 85, 104, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft=""
          absolute
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Derniers utilisateurs</Text>
        <View style={styles.listContainer}>
          <ListItem text="Marie Dubois - Ménage" />
          <ListItem text="Thomas Martin - Ménage" />
          <ListItem text="Sophie Bernard - Ménage" />
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Voir tous les utilisateurs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Collectes récentes</Text>
        <View style={styles.listContainer}>
          <ListItem text="12 Rue Victor Hugo - Complétée" />
          <ListItem text="8 Avenue Foch - En attente" />
          <ListItem text="45 Boulevard Haussmann - Acceptée" />
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Voir toutes les collectes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rapports disponibles</Text>
        <View style={styles.listContainer}>
          <ListItem text="Rapport mensuel - Mars 2025" />
          <ListItem text="Analyse des déchets par type" />
          <ListItem text="Performance des collecteurs" />
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Voir tous les rapports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}