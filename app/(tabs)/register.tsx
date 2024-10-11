import { useFonts } from 'expo-font'; 
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const RegisterScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleRegister = async () => {
    const token = "code37";
    const id = new Date().getTime().toString(); // Generate a unique ID

    const formData = new URLSearchParams();
    formData.append('token', token);
    formData.append('id', id);
    formData.append('username', username);
    formData.append('pass', password);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);

    try {
      const response = await fetch('http://monsterballgo.com/api/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const result = await response.json();
      if (result.success) {
        Alert.alert('Registration Successful', 'You have been registered successfully.');
      } else {
        Alert.alert('Registration Failed', result.message || 'An error occurred.');
      }
    } catch (error) {
      Alert.alert('Registration Failed', 'An error occurred.');
    }
  };

  useFonts({
    'IndivisaTextSans': require('@/assets/fonts/IndivisaTextSans-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#001d68" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Registro de usuarios</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#001d68" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter username"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#001d68" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#001d68" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={firstname}
              onChangeText={setFirstname}
              placeholder="Enter first name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#001d68" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={lastname}
              onChangeText={setLastname}
              placeholder="Enter last name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#001d68" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#001d68',
    marginBottom: 30,
    fontFamily: 'IndivisaTextSans',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderColor: '#001d68',
    borderWidth: 4,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'IndivisaTextSans',
    paddingVertical: 10,
    color: '#001d68',
  },
  registerButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#001d68',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#001d68',
    alignItems: 'center',
    marginTop: 30,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'IndivisaTextSans',
  },
});
