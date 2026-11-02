import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { BUBBLE_PADDING_H } from "../theme/bubbleShapes";
import { fonts } from "../theme/typography";

export const factBubbleStyles = StyleSheet.create({
  bubbleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleContent: {
    paddingHorizontal: BUBBLE_PADDING_H,
    paddingVertical: 0,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    marginBottom: 2,
    maxWidth: "100%",
  },
  emoji: {
    fontSize: 10,
    lineHeight: 12,
  },
  category: {
    flexShrink: 1,
    fontSize: 9.5,
    fontFamily: fonts.extraBold,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#DC2F02",
    opacity: 0.95,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.muted,
    textAlign: "center",
    letterSpacing: 0,
  },
});
