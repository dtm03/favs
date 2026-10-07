import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const messageBubbleStyles = StyleSheet.create({
  row: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  rowSent: {
    justifyContent: 'flex-end',
  },
  rowReceived: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '78%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  sent: {
    backgroundColor: colors.orange,
    borderBottomRightRadius: 4,
  },
  received: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: colors.creamDark,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
  textSent: {
    color: colors.white,
  },
  textReceived: {
    color: colors.charcoal,
  },
  time: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.7,
  },
});
