import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';


export default function TabLayout() {
    useFonts({
        'IndivisaTextSans': require('@/assets/fonts/IndivisaTextSans-Regular.ttf'),
    });
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#001d68',
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTintColor: '#000',
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
                tabBarLabelStyle: {
                    fontFamily: 'IndivisaTextSans',
                },
            }}
        >

            <Tabs.Screen
                name="home"
                options={{
                    title: 'Menú principal',
                    headerStyle: {
                        backgroundColor: '#001d68',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                        fontFamily: 'IndivisaTextSans',
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
