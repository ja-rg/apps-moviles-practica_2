import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Logic for login
    console.log("Login pressed");
  };

  useFonts({
    'IndivisaTextSans': require('@/assets/fonts/IndivisaTextSans-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#001d68" />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#001d68',
    marginBottom: 30,
    fontFamily: 'IndivisaTextSans',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#d21034',
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'IndivisaTextSans',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#001d68',
    borderWidth: 2,
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'IndivisaTextSans',
  },
  loginButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#001d68',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#001d68',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'IndivisaTextSans',
  },
});
