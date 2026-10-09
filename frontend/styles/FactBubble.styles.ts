import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { BUBBLE_PADDING_H } from "../theme/bubbleShapes";

export const factBubbleStyles = StyleSheet.create({
  bubbleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleContent: {
    paddingHorizontal: BUBBLE_PADDING_H,
    paddingVertical: 0,
  },
  category: {
    fontSize: 9.5,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#DC2F02",
    marginBottom: 2,
    textAlign: "center",
    opacity: 0.95,
  },
  value: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.muted,
    textAlign: "center",
    letterSpacing: -0.2,
  },
});
