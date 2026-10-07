import { StyleSheet } from "react-native";

export const factsSwipeViewStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative", // Enables absolute positioning for children
    width: "100%",
    height: "100%",
  },
  absoluteBubble: {
    position: "absolute",
    alignSelf: "flex-start",
  },
});
