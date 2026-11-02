import { StyleSheet } from "react-native";
import { HOME_TAB_HORIZONTAL_PADDING } from "./HomeTabHeader.styles";

export const swipeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HOME_TAB_HORIZONTAL_PADDING,
  },
  cardArea: {
    flex: 1,
    justifyContent: "center",
  },
});
