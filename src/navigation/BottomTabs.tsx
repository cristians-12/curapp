import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import History from '@/pages/History';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import {colors} from '@/theme';
import type {BottomTabsParamList} from '@/types/navigation';

import {styles} from './styles';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

// Los tipos de react-native-vector-icons v10 no son compatibles con
// @types/react 18.3 (error TS2786), así que se tipa manualmente el componente.
const TabIcon = Ionicons as unknown as React.ComponentType<{
  name: string;
  size: number;
  color: string;
}>;

const TAB_ICONS: Record<
  keyof BottomTabsParamList,
  {active: string; inactive: string}
> = {
  HomeTab: {active: 'home', inactive: 'home-outline'},
  HistoryTab: {active: 'time', inactive: 'time-outline'},
  Profile: {active: 'person', inactive: 'person-outline'},
};

function BottomTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({color, focused, size}) => {
          const icons = TAB_ICONS[route.name];
          return (
            <TabIcon
              name={focused ? icons.active : icons.inactive}
              size={size}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen name="HomeTab" component={Home} options={{title: 'Inicio'}} />
      <Tab.Screen
        name="HistoryTab"
        component={History}
        options={{
          title: 'Historial',
          headerShown: true,
          headerStyle: {backgroundColor: colors.primary},
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
          headerStyle: {backgroundColor: colors.primary},
          headerTitleStyle: styles.titleStyle,
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
