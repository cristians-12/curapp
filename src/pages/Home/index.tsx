import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTemplate from '@/components/templates/home';

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
      <HomeTemplate />
    </SafeAreaView>
  );
}

