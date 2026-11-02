import { StyleSheet } from 'react-native';
import {
  HEADER_ACTION_SLOT,
  HEADER_CONTENT_GAP,
  HEADER_TITLE_LINE_HEIGHT,
  SCREEN_HORIZONTAL_PADDING,
} from '../theme/layout';
import { textStyles } from '../theme/typography';

export const screenHeaderStyles = StyleSheet.create({
  block: {
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    marginBottom: HEADER_CONTENT_GAP,
  },
  titleLine: {
    position: 'relative',
    minHeight: HEADER_TITLE_LINE_HEIGHT,
    justifyContent: 'center',
  },
  titleWithAction: {
    paddingRight: HEADER_ACTION_SLOT,
  },
  actionSlot: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: HEADER_TITLE_LINE_HEIGHT,
    width: HEADER_ACTION_SLOT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    ...textStyles.screenSubtitle,
    marginTop: 2,
  },
});
