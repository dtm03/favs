import { StyleSheet } from 'react-native';
import { CONTENT_HORIZONTAL_PADDING, LIST_TOP_INSET } from '../theme/layout';
import { PILL_GAP } from '../theme/pills';

export const profileEditScreenStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
    paddingTop: LIST_TOP_INSET,
    paddingBottom: 32,
    gap: PILL_GAP,
    backgroundColor: 'transparent',
  },
  favGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: PILL_GAP,
    width: '100%',
    marginTop: 2,
  },
});
