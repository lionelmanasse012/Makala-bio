import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ListItemProps {
  text: string;
  isHeader?: boolean;
  backgroundColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, isHeader = false, backgroundColor = '#FFFFFF' }) => {
  return (
    <View style={[styles.listItem, { backgroundColor }]}>
      {!isHeader && <Icon name="check-circle" size={16} color="#16A349" />}
      <Text style={[styles.listItemText, isHeader && styles.headerText]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  listItemText: {
    fontSize: 16,
    color: '#4A5568',
    marginLeft: 8,
    fontFamily: 'Helvetica Neue',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#1A202C',
    marginLeft: 0,
  },
});

export default ListItem;