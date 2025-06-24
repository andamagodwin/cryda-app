import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { HapticTab } from '~/components/HapticTab';

import AntDesign from '@expo/vector-icons/AntDesign';
import TabBarBackground  from '~/components/ui/TabBarBackground';
import { Colors } from '~/constants/Colors';
import { useColorScheme } from '~/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].text,

        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height: 70,
            
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =><AntDesign name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <AntDesign name="wallet" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: 'Rides',
          tabBarIcon: ({ color }) => <AntDesign name="car" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
