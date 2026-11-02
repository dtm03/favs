import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/typography";

/** Two-line header (title + bio hint) — same block on swipe & chats tabs */
const SUBTITLE_LINE_HEIGHT = 18;
const SUBTITLE_LINES = 2;

export const HOME_TAB_HEADER_SUBTITLE_BLOCK =
  2 + SUBTITLE_LINE_HEIGHT * SUBTITLE_LINES;

/** Single title line — swipe name & “Chats” share this box */
export const HOME_TAB_TITLE_LINE_HEIGHT = 32;

/** Room for profile icon without shifting title baseline */
export const HOME_TAB_HEADER_TRAILING_WIDTH = 40;

export const homeTabHeaderStyles = StyleSheet.create({
  headerBlock: {
    marginBottom: 8,
    minHeight: HOME_TAB_TITLE_LINE_HEIGHT + HOME_TAB_HEADER_SUBTITLE_BLOCK,
  },
  titleLine: {
    position: "relative",
    minHeight: HOME_TAB_TITLE_LINE_HEIGHT,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    lineHeight: HOME_TAB_TITLE_LINE_HEIGHT,
    fontFamily: fonts.extraBold,
    color: colors.orange,
    letterSpacing: -0.3,
    includeFontPadding: false,
  },
  titleWithTrailingSlot: {
    paddingRight: HOME_TAB_HEADER_TRAILING_WIDTH,
  },
  headerTrailingAction: {
    position: "absolute",
    right: 0,
    top: 0,
    height: HOME_TAB_TITLE_LINE_HEIGHT,
    width: HOME_TAB_HEADER_TRAILING_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 2,
    fontFamily: fonts.medium,
    letterSpacing: 0.1,
    lineHeight: SUBTITLE_LINE_HEIGHT,
    minHeight: HOME_TAB_HEADER_SUBTITLE_BLOCK,
  },
});

/** Horizontal inset shared by swipe + chats so headers line up */
export const HOME_TAB_HORIZONTAL_PADDING = 32;
