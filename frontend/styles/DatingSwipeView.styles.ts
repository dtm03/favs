import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const datingSwipeViewStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoCard: {
    width: '100%',
    maxWidth: 340,
    aspectRatio: 3 / 4,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: colors.creamDark,
    elevation: 8,
    shadowColor: colors.ember,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingTop: 48,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.white,
  },
  meta: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.creamDark,
  },
  dotActive: {
    backgroundColor: colors.orange,
    width: 20,
  },
});
