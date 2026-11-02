import { StyleSheet } from 'react-native';
import { SCREEN_HORIZONTAL_PADDING } from '../theme/layout';

export const swipeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardArea: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
});
