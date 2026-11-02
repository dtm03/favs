import { StyleSheet } from 'react-native';

export const pillStyles = StyleSheet.create({
  host: {
    width: '100%',
  },
  hostFitContent: {
    alignSelf: 'flex-start',
  },
  content: {
    zIndex: 2,
    position: 'relative',
    width: '100%',
  },
  contentFill: {
    height: '100%',
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.985 }],
  },
});
