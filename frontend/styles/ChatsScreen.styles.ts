import { StyleSheet } from "react-native";
import { HOME_TAB_HORIZONTAL_PADDING } from "./HomeTabHeader.styles";

/** Narrower than header — chat pills use more screen width */
export const CHAT_LIST_HORIZONTAL_PADDING = 14;

export const chatsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  headerInset: {
    paddingHorizontal: HOME_TAB_HORIZONTAL_PADDING,
  },
  list: {
    gap: 10,
    paddingBottom: 16,
    paddingHorizontal: CHAT_LIST_HORIZONTAL_PADDING,
  },
});
