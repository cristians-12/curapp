import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';
import SplashTemplate from '@/components/templates/splash';


export default function SplashScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SplashTemplate />
    </SafeAreaView>
  );
}
