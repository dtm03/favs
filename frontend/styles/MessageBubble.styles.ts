import { StyleSheet } from 'react-native';
import { CONTENT_GAP } from '../theme/layout';

export const messageBubbleStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: CONTENT_GAP,
  },
  rowSent: {
    justifyContent: 'flex-end',
  },
  rowReceived: {
    justifyContent: 'flex-start',
  },
  pill: {
    maxWidth: '82%',
  },
  pillContent: {
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  time: {
    marginTop: 4,
  },
});
