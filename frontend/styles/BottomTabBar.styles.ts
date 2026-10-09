import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const bottomTabBarStyles = StyleSheet.create({
  bar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 8,
    paddingTop: 0,
    backgroundColor: "transparent",
  },
  iconButton: {
    margin: 0,
    marginHorizontal: 4,
  },
  tab: {
    minWidth: 120,
    borderRadius: 999,
  },
});
