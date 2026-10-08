import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const factBubbleStyles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: colors.bubbleFill,
    borderWidth: 1.5,
    borderColor: colors.bubbleBorder,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.orange,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 3,
  },
  category: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    color: colors.orange,
    marginBottom: 2,
    textAlign: 'center',
  },
  value: {
    fontSize: 13.5,
    fontWeight: '700',
    color: colors.charcoal,
    textAlign: 'center',
  },
});
