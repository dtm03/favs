import { StyleSheet } from 'react-native';
import { colors } from './colors';
import {
  HEADER_SUBTITLE_LINE_HEIGHT,
  HEADER_TITLE_LINE_HEIGHT,
} from './layout';

/** Rounded, friendly face — loaded in App.tsx via @expo-google-fonts/nunito */
export const fonts = {
  regular: 'Nunito_400Regular',
  medium: 'Nunito_500Medium',
  semiBold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
  extraBold: 'Nunito_800ExtraBold',
  black: 'Nunito_900Black',
} as const;

/** Body text inside pills — fav bubbles, chat rows, messages, inputs */
export const PILL_VALUE_LINE_HEIGHT = 19;

/**
 * Every piece of text in the app comes from here, so a size or weight is
 * changed in one place instead of per screen.
 */
export const textStyles = StyleSheet.create({
  screenTitle: {
    fontSize: 26,
    lineHeight: HEADER_TITLE_LINE_HEIGHT,
    fontFamily: fonts.extraBold,
    color: colors.orange,
    letterSpacing: -0.3,
    includeFontPadding: false,
  },
  screenSubtitle: {
    fontSize: 14,
    lineHeight: HEADER_SUBTITLE_LINE_HEIGHT,
    fontFamily: fonts.medium,
    color: colors.muted,
    letterSpacing: 0.1,
  },
  /** Orange caps label: fav category, profile field name, chat partner */
  pillHeading: {
    fontSize: 9.5,
    fontFamily: fonts.extraBold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: colors.ember,
    opacity: 0.95,
  },
  pillHeadingEmoji: {
    fontSize: 10,
    lineHeight: 12,
  },
  /** Grey pill body — same size on fav bubbles, chat rows and messages */
  pillValue: {
    fontSize: 14,
    lineHeight: PILL_VALUE_LINE_HEIGHT,
    fontFamily: fonts.bold,
    color: colors.muted,
  },
  pillValueOnOrange: {
    fontSize: 14,
    lineHeight: PILL_VALUE_LINE_HEIGHT,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  /** Timestamps and counters */
  pillMeta: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.medium,
    color: colors.muted,
    opacity: 0.85,
  },
  pillMetaOnOrange: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.medium,
    color: 'rgba(255, 255, 255, 0.82)',
  },
});
