import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const chatDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  messages: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: colors.creamDark,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.cream,
  },
});
