import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@/theme';

/** Pantalla de historial de las tabs (placeholder). */
function History(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});

export default History;
