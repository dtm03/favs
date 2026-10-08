import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const chatsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.charcoal,
  },
  list: {
    gap: 10,
    paddingBottom: 20,
  },
});
