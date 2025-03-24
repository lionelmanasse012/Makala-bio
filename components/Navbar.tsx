import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Bell, Recycle, User } from 'lucide-react-native'

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.logoContainer}>
        <Recycle color={'#16A349'} />
        <Text style={styles.logo}>E-Butshafu</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.notifications}>
            <Text style={styles.notificationsText}>3</Text>
          </View>
          <Bell color="black" size={18} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <User color="black" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E6E6E9',
  },
  button: {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#E6E6E9',
  },
  notifications: {
    position: 'absolute',
    display: 'flex',
    right: -5,
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16A349',
    width: 15,
    height: 15,
    borderRadius: 100
  },
  notificationsText: {
    fontSize: 10,
    color: 'white'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  logo: {
    fontSize: 20,
    fontWeight: 600,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    gap: 8
  }
})
