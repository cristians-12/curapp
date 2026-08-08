import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {RootStackParamList} from '@/types/navigation';
import BottomTabs from './BottomTabs';
import SplashScreen from '@/pages/Splash';

const Stack = createNativeStackNavigator<RootStackParamList>();


function RootStack(): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
