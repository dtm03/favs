import { StyleSheet } from 'react-native';
import { CONTENT_HORIZONTAL_PADDING, LIST_TOP_INSET } from '../theme/layout';

export const chatDetailScreenStyles = StyleSheet.create({
  messages: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  messagesContent: {
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
    paddingTop: LIST_TOP_INSET,
    paddingBottom: 12,
    backgroundColor: 'transparent',
  },
  composerRow: {
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
    paddingTop: 4,
    backgroundColor: 'transparent',
  },
});
