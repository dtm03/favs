import { StyleSheet } from 'react-native';
import { HEADER_ACTION_SLOT, HEADER_TITLE_LINE_HEIGHT } from '../theme/layout';

export const headerIconButtonStyles = StyleSheet.create({
  button: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 0,
    width: HEADER_ACTION_SLOT,
    height: HEADER_TITLE_LINE_HEIGHT,
  },
});
