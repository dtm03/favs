import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const bottomTabBarStyles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingTop: 8,
    backgroundColor: colors.cream,
  },
  tab: {
    minWidth: 120,
    borderRadius: 999,
  },
});
