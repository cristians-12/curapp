import {StyleSheet} from 'react-native';

import {colors, typography} from '@/theme';

export const styles = StyleSheet.create({
  headerStyle: {
    color: colors.primary,
  },
  titleStyle: {
    fontWeight: typography.weights.semibold,
    color: colors.onPrimary,
    textAlign: 'center',
    fontSize: 17,
  },
});
