import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/typography";

export const chatListItemStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: 20,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.orangeLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: "rgba(255, 255, 255, 0.65)",
  },
  avatarText: {
    fontSize: 17,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  lineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  lineRowFirst: {
    marginBottom: 2,
  },
  name: {
    flex: 1,
    minWidth: 0,
    fontSize: 15,
    fontFamily: fonts.extraBold,
    color: "#DC2F02",
    opacity: 0.95,
  },
  time: {
    minWidth: 58,
    textAlign: "right",
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.muted,
    opacity: 0.85,
  },
  preview: {
    flex: 1,
    minWidth: 0,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.muted,
    opacity: 0.9,
  },
  badgeSlot: {
    minWidth: 58,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  badge: {
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontFamily: fonts.bold,
    lineHeight: 11,
  },
});
