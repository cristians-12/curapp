import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTemplate from '@/components/templates/home';

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
      <HomeTemplate />
    </SafeAreaView>
  );
}

