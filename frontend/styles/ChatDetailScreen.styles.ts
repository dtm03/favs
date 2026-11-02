import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/typography";
import {
  MESSAGE_COMPOSER_HEIGHT,
  MESSAGE_COMPOSER_RADIUS,
} from "../theme/glassTokens";

export const chatDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  messages: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputRow: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
    backgroundColor: colors.cream,
  },
  input: {
    minHeight: MESSAGE_COMPOSER_HEIGHT,
    height: MESSAGE_COMPOSER_HEIGHT,
    backgroundColor: colors.white,
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 21,
    justifyContent: "center",
  },
  inputOutline: {
    borderRadius: MESSAGE_COMPOSER_RADIUS,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: colors.orange,
  },
});
