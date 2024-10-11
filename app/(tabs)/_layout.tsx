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
                // icon in the header
                tabBarIconStyle: {
                    display: 'flex',
                },
            }}
        >

            <Tabs.Screen
                name="register"
                options={{
                    title: 'Registro de usuarios',
                    headerStyle: {
                        backgroundColor: '#001d68',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                        fontFamily: 'IndivisaTextSans',
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-add' : 'person-add-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Inicio de sesión',
                    headerStyle: {
                        backgroundColor: '#001d68',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                        fontFamily: 'IndivisaTextSans',
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'log-in' : 'log-in-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
