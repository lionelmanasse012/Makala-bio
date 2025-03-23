import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Bell, User } from 'lucide-react-native'

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.button}>
        <Bell color="white" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <User color="white" size={24} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#16A349',
    padding: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
})
