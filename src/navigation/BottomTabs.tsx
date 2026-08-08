import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {Icon} from '@/components/atoms';
import History from '@/pages/History';
import Profile from '@/pages/Profile';
import { colors } from '@/theme';
import type { BottomTabsParamList } from '@/types/navigation';

import { styles } from './styles';
import HomeScreen from '@/pages/Home';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const TAB_ICONS: Record<
  keyof BottomTabsParamList,
  { active: string; inactive: string }
> = {
  HomeTab: { active: 'home', inactive: 'home-outline' },
  HistoryTab: { active: 'time', inactive: 'time-outline' },
  Profile: { active: 'person', inactive: 'person-outline' },
};

function BottomTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color, focused, size }) => {
          const icons = TAB_ICONS[route.name];
          return (
            <Icon
              name={focused ? icons.active : icons.inactive}
              size={size}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen
        name="HistoryTab"
        component={History}
        options={{
          title: 'Historial',
          headerShown: true,
          headerStyle: { backgroundColor: colors.primary },
          headerTitleStyle: styles.titleStyle,
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          headerShown: true,
          headerStyle: { backgroundColor: colors.primary },
          headerTitleStyle: styles.titleStyle,
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
