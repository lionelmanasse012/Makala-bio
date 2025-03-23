import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
  map: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
  },
});

const CarteTab = () => {
  const initialRegion = {
    latitude: 48.8566,
    longitude: 2.3522,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const markers = [
    { id: 1, latitude: 48.8566, longitude: 2.3522, color: 'red' },
    { id: 2, latitude: 48.8584, longitude: 2.2945, color: 'blue' },
    { id: 3, latitude: 48.8606, longitude: 2.3376, color: 'green' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Carte des collectes</Text>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            pinColor={marker.color}
          />
        ))}
      </MapView>
    </View>
  );
};

export default CarteTab;