import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@/theme';

/** Pantalla de perfil de las tabs (placeholder). */
function Profile(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
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

export default Profile;
