import { Platform, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const cardRadius = 42;

const iosCardShadow = Platform.select({
  ios: {
    shadowColor: colors.muted,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
  },
  default: {
    elevation: 5,
  },
});

export const chatListItemStyles = StyleSheet.create({
  shadowHost: {
    borderRadius: cardRadius,
    ...iosCardShadow,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.985 }],
  },
  card: {
    borderRadius: cardRadius,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: "rgba(255, 255, 255, 0.85)",
    backgroundColor: colors.white,
  },
  cardFill: {
    ...StyleSheet.absoluteFill,
  },
  highlightEdge: {
    position: "absolute",
    top: 0,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    position: "relative",
    zIndex: 2,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.orangeLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: "rgba(255, 255, 255, 0.65)",
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
  },
  body: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    gap: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: colors.muted,
  },
  time: {
    fontSize: 12,
    color: colors.muted,
    opacity: 0.85,
  },
  preview: {
    fontSize: 14,
    color: colors.muted,
    opacity: 0.9,
  },
  badge: {
    marginLeft: 8,
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
  },
});
