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
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.creamDark,
  },
  storyBars: {
    position: 'absolute',
    top: 10,
    left: 12,
    right: 12,
    flexDirection: 'row',
    gap: 6,
    zIndex: 10,
  },
  storyBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  storyBarActive: {
    backgroundColor: colors.white,
  },
  tapZoneContainer: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
    zIndex: 5,
  },
  tapLeft: {
    width: '40%',
    height: '100%',
  },
  tapRight: {
    width: '60%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingTop: 48,
    zIndex: 6,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.white,
  },
  meta: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.92)',
    marginTop: 4,
    lineHeight: 18,
  },
  photoHint: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.75)',
    marginTop: 6,
    fontWeight: '600',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
  },
  dotPressable: {
    padding: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.creamDark,
  },
  dotActive: {
    backgroundColor: colors.orange,
    width: 22,
  },
});
