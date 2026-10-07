import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const bottomTabBarStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    paddingBottom: 24,
    backgroundColor: colors.cream,
    borderTopWidth: 1,
    borderTopColor: colors.creamDark,
  },
  tab: {
    minWidth: 120,
    borderRadius: 999,
  },
});
