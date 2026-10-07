import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const chatsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.charcoal,
    marginBottom: 16,
  },
  list: {
    gap: 10,
  },
});
