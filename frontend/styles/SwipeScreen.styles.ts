import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const swipeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    gap: 12,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.orange,
  },
  hint: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 2,
    fontWeight: "500",
  },
  cardArea: {
    flex: 1,
    justifyContent: "center",
  },
});
