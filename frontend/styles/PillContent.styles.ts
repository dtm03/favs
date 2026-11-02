import { StyleSheet } from 'react-native';
import { BUBBLE_PADDING_H } from '../theme/bubbleShapes';

/** Content layouts shared by every pill — fav bubbles, grid cells, profile fields. */
export const pillContentStyles = StyleSheet.create({
  /** Emoji + orange caps label */
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    maxWidth: '100%',
  },
  headingLabel: {
    flexShrink: 1,
  },
  /** Heading above value, both centred — fav bubbles and the profile grid */
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: BUBBLE_PADDING_H,
    gap: 2,
  },
  /** Heading and value side by side on one line — Name, Stadt */
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 10,
  },
  /** Heading on top, value underneath, left aligned — Bio */
  stacked: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 18,
    gap: 6,
  },
  centeredValue: {
    textAlign: 'center',
  },
  /** Value fills the rest of an inline row */
  inlineValue: {
    flex: 1,
  },
  stackedValue: {
    flex: 1,
    width: '100%',
  },
});
