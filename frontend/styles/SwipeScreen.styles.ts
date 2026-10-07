import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const swipeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.charcoal,
    textAlign: 'center',
    marginBottom: 8,
  },
  hint: {
    textAlign: 'center',
    color: colors.muted,
    fontSize: 13,
    marginBottom: 12,
  },
  cardArea: {
    flex: 1,
    justifyContent: 'center',
  },
});
