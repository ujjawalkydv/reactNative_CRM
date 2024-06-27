import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Linking
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      <View contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/images/etp_logo.png')} style={styles.logo} />
        </View>
        
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to EASY TIME PAY</Text>
          <Text style={styles.subtitle}>Enter your login details</Text>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="User ID" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <TextInput style={styles.input} placeholder="Domain Name" />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.productTitle}>Our Software Solutions</Text>
        <View style={styles.productGrid}>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/easytimepay-time-attendance-software.html')}
          style={styles.gridItem}>
            <Image source={require('./assets/images/etp_login_page.png')} style={styles.gridImage} />
            <Text style={styles.gridText}>Attendance Software</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/leave-management-software.html')}
          style={styles.gridItem}>
            <Image source={require('./assets/images/leave.png')} style={styles.gridImage} />
            <Text style={styles.gridText}>Leave Management</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/payroll-management-software.html')}
          style={styles.gridItem}>
            <Image source={require('./assets/images/payroll2.jpg')} style={styles.gridImage} />
            <Text style={styles.gridText}>Payroll Software</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/visitor-management-system.html')}
          style={styles.gridItem}>
            <Image source={require('./assets/images/visitor1.png')} style={styles.gridImage} />
            <Text style={styles.gridText}>Visitor Management</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/canteen-management-software.html')}
          style={styles.gridItem}>
            <Image source={require('./assets/images/canteen1.png')} style={styles.gridImage} />
            <Text style={styles.gridText}>Canteen Management</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/performance-management-system.html')}
          style={styles.gridItem}>
            <Image source={require('./assets/images/pms.jpg')} style={styles.gridImage} />
            <Text style={styles.gridText}>PMS Module</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      <View style={styles.bottomNav}>
        <TouchableOpacity 
        onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/contact-us.html')}
        style={styles.navItem}>
          <Feather name="map-pin" size={24} color="#191970" />
          <Text style={styles.navText}>Locate Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/our-product.html')}
        style={styles.navItem}>
          <Feather name="globe" size={24} color="#191970" />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => Linking.openURL('https://youtu.be/RzvD5BFRmg0?si=HTKDbp2HUn9PEWYM')}
        style={styles.navItem}>
          <Feather name="play-circle" size={24} color="#191970" />
          <Text style={styles.navText}>Demo Video</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => Linking.openURL('https://www.avtechnosoftindia.com/our-clients.html')}
        style={styles.navItem}>
          <Feather name="user" size={24} color="#191970" />
          <Text style={styles.navText}>Clients</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F0F8FF',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100, // Ensure space for bottom nav
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 80,
  },
  header: {
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    // Margin at the top of the header
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    margin: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#07124c', // Dark blue background
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0066cc',
    textAlign: 'right',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    color: '#191970',
    textAlign: 'center',
    
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#ADD8E6',
    borderRadius: 12,
    paddingBottom: 60,
    marginHorizontal: 10,
   
  },
  gridItem: {
    width: '28%',
    height: 80,
    backgroundColor: '#F0F8FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  gridImage: {
    width: 80,
    height: 50,
    borderRadius:10,
  },
  gridText: {
    fontSize: 10,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingVertical: 6,
    backgroundColor: '#F5F5F5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#0066cc',
  },
});

export default App;
