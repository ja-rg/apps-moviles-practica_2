import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';


export default function RootLayout() {
  useFonts({
    'IndivisaTextSans': require('@/assets/fonts/IndivisaTextSans-Regular.ttf'),
  });

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
