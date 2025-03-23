import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  iconName: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, iconName }) => {
  return (
    <Animated.View style={[styles.statCard, { shadowOpacity: new Animated.Value(0.1) }]}>
      <Icon name={iconName} size={24} color="#4A5568" />
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statChange}>{change}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statTitle: {
    fontSize: 16,
    color: '#4A5568',
    marginTop: 8,
    fontFamily: 'Helvetica Neue',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A202C',
    marginVertical: 8,
    fontFamily: 'Helvetica Neue',
  },
  statChange: {
    fontSize: 14,
    color: '#16A349',
    fontFamily: 'Helvetica Neue',
  },
});

export default StatCard;