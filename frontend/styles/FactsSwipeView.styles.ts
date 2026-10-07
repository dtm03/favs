import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const factsSwipeViewStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  bubbleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 8,
  },
  nameTag: {
    alignSelf: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.orangeLight,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.charcoal,
  },
});
