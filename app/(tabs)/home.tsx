import { Link } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function Index() {
  const [loaded] = useFonts({
    'Indivisa': require('@/assets/fonts/IndivisaTextSans-Regular.ttf'),
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link to="/login">Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Indivisa',
    color: '#fff',
    fontSize: 20,
  },
});
