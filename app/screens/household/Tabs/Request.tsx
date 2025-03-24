import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Request: React.FC = () => {
  const [wasteType, setWasteType] = useState<string>('');
  const [estimatedWeight, setEstimatedWeight] = useState<string>('');
  const [collectionDate, setCollectionDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [collectionTime, setCollectionTime] = useState<Date>(new Date());
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || collectionDate;
    setShowDatePicker(false);
    setCollectionDate(currentDate);
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    const currentTime = selectedTime || collectionTime;
    setShowTimePicker(false);
    setCollectionTime(currentTime);
  };

  const handleWasteTypeSelection = (type: string) => {
    setWasteType(type);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      enableOnAndroid={true}
      extraScrollHeight={20} // Ajustez cette valeur si nécessaire
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.header}>Demande de collecte</Text>

      <Text style={styles.label}>Type de déchets</Text>
      
      {/* Option Recyclables */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleWasteTypeSelection('Recyclables')}
      >
        <View style={styles.radioCircle}>
          {wasteType === 'Recyclables' && <View style={styles.selectedRb} />}
        </View>
        <View style={[styles.colorCircle, { backgroundColor: '#4CAF50' }]} />
        <Text style={styles.optionText}>Recyclables (papier, carton, plastique)</Text>
      </TouchableOpacity>

      {/* Option Déchets organiques */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleWasteTypeSelection('Organiques')}
      >
        <View style={styles.radioCircle}>
          {wasteType === 'Organiques' && <View style={styles.selectedRb} />}
        </View>
        <View style={[styles.colorCircle, { backgroundColor: '#FFC107' }]} />
        <Text style={styles.optionText}>Déchets organiques</Text>
      </TouchableOpacity>

      {/* Option Déchets électroniques */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleWasteTypeSelection('Électroniques')}
      >
        <View style={styles.radioCircle}>
          {wasteType === 'Électroniques' && <View style={styles.selectedRb} />}
        </View>
        <View style={[styles.colorCircle, { backgroundColor: '#2196F3' }]} />
        <Text style={styles.optionText}>Déchets électroniques</Text>
      </TouchableOpacity>

      {/* Option Autres */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleWasteTypeSelection('Autres')}
      >
        <View style={styles.radioCircle}>
          {wasteType === 'Autres' && <View style={styles.selectedRb} />}
        </View>
        <View style={[styles.colorCircle, { backgroundColor: '#9E9E9E' }]} />
        <Text style={styles.optionText}>Autres</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Poids estimé (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 5"
        keyboardType="numeric"
        value={estimatedWeight}
        onChangeText={setEstimatedWeight}
      />

      {/* Section Date de collecte */}
      <Text style={styles.sectionHeader}>Date de collecte</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShowDatePicker(true)}>
        <Text>{collectionDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={collectionDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {/* Section Heure de collecte */}
      <Text style={styles.sectionHeader}>Heure de collecte</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShowTimePicker(true)}>
        <Text>{collectionTime.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={collectionTime}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}

      {/* Section Notes supplémentaires */}
      <Text style={styles.sectionHeader}>Notes supplémentaires (optionnel)</Text>
      <TextInput
        style={styles.notesInput}
        placeholder="Informations complémentaires pour le collecteur"
        multiline
        value={additionalNotes}
        onChangeText={setAdditionalNotes}
      />

      {/* Bouton Envoyer la demande */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Envoyer la demande</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#000',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#16A349',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16A349',
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    height: 100,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#16A349',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Request;