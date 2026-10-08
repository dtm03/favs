import { StyleSheet } from 'react-native';

export const factBubbleStyles = StyleSheet.create({
  bubbleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleContent: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 104,
  },
  category: {
    fontSize: 9.5,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#DC2F02',
    marginBottom: 2,
    textAlign: 'center',
    opacity: 0.95,
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1917',
    textAlign: 'center',
    letterSpacing: -0.2,
  },
});
