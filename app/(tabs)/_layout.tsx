import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

<<<<<<< HEAD
import { COLORS } from '@/constants/colors';

=======
>>>>>>> b2d3527567e32017a9d8d123131779c18c5bcdce
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
<<<<<<< HEAD
        tabBarActiveTintColor: COLORS.primary,
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
        headerTintColor: COLORS.textPrimary,
        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
        },
=======
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: { backgroundColor: '#25292e' },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#25292e' },
>>>>>>> b2d3527567e32017a9d8d123131779c18c5bcdce
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
<<<<<<< HEAD

=======
>>>>>>> b2d3527567e32017a9d8d123131779c18c5bcdce
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'qr-code' : 'qr-code-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
<<<<<<< HEAD

=======
>>>>>>> b2d3527567e32017a9d8d123131779c18c5bcdce
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'time' : 'time-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
<<<<<<< HEAD

=======
>>>>>>> b2d3527567e32017a9d8d123131779c18c5bcdce
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
<<<<<<< HEAD

      <Tabs.Screen
        name="teacher"
        options={{
          title: 'Teacher',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'clipboard' : 'clipboard-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
=======
      <Tabs.Screen
      name="teacher"
      options={{
        title: 'Teacher',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={focused ? 'clipboard' : 'clipboard-outline'}
            color={color}
            size={24}
          />
        ),
      }}
      />
    </Tabs>
  );
}
>>>>>>> b2d3527567e32017a9d8d123131779c18c5bcdce
