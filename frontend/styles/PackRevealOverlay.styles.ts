import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const packRevealOverlayStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 248, 240, 0.92)',
    zIndex: 100,
  },
  burst: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: '800',
    color: colors.orange,
    letterSpacing: 1,
  },
});
