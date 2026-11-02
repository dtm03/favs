import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/typography";

export const messageBubbleStyles = StyleSheet.create({
  row: {
    marginBottom: 10,
    flexDirection: "row",
  },
  rowSent: {
    justifyContent: "flex-end",
  },
  rowReceived: {
    justifyContent: "flex-start",
  },
  pillContent: {
    paddingHorizontal: 22,
    paddingVertical: 11,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.regular,
  },
  textSent: {
    color: colors.white,
  },
  textReceived: {
    color: colors.muted,
  },
  time: {
    fontSize: 10,
    fontFamily: fonts.medium,
    marginTop: 4,
  },
  timeSent: {
    color: "rgba(255, 255, 255, 0.82)",
  },
  timeReceived: {
    color: colors.muted,
    opacity: 0.75,
  },
});
