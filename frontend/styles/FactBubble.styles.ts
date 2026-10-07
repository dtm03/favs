import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const factBubbleStyles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: colors.bubbleFill,
    borderWidth: 1.5,
    borderColor: colors.bubbleBorder,
    maxWidth: '46%',
    minWidth: 120,
  },
  category: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    color: colors.orange,
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.charcoal,
  },
});
