import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Icon name="check-circle" size={16} color="#16A349" />
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 16,
    color: '#4A5568',
    marginLeft: 8,
    fontFamily: 'Helvetica Neue',
  },
});

export default ListItem;