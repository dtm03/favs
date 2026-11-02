import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

const AVATAR_SIZE = 40;
const META_COLUMN_WIDTH = 52;

export const chatListItemStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 18,
    gap: 10,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: colors.orangeLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'rgba(255, 255, 255, 0.65)',
  },
  avatarText: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  body: {
    flex: 1,
    minWidth: 0,
    gap: 3,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nameSlot: {
    flex: 1,
    minWidth: 0,
  },
  time: {
    width: META_COLUMN_WIDTH,
    textAlign: 'right',
  },
  preview: {
    flex: 1,
    minWidth: 0,
    opacity: 0.9,
  },
  badgeSlot: {
    width: META_COLUMN_WIDTH,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  badge: {
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontFamily: fonts.bold,
    lineHeight: 11,
  },
});
