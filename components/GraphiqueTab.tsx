import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { theme } from '@/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
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
});

const GraphiqueTab = () => {
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
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Déchets triés vs non triés</Text>
      <PieChart
        data={pieData}
        width={width - 45}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(74, 85, 104, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default GraphiqueTab;