import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

/** Space below status bar / notch to header (top only) */
export const HOME_TOP_MARGIN = 16;

/** Extra space above home indicator; 0 keeps tab icons as low as safe area allows */
export const HOME_BOTTOM_TAB_MARGIN = 0;

/** Icon row height (excluding home-indicator inset) for content clearance */
export const BOTTOM_TAB_BAR_HEIGHT = 44;

export const homeScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.cream,
    position: 'relative',
  },
  foreground: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
  },
});
