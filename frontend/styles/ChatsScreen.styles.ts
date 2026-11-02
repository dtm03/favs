import { StyleSheet } from 'react-native';
import { CONTENT_HORIZONTAL_PADDING, LIST_TOP_INSET } from '../theme/layout';
import { PILL_GAP } from '../theme/pills';

export const chatsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: PILL_GAP,
    paddingTop: LIST_TOP_INSET,
    paddingBottom: 16,
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
  },
});
