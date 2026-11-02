import { MD3LightTheme, configureFonts } from 'react-native-paper';
import { colors } from './colors';
import { fonts } from './typography';

const nunito = configureFonts({
  config: {
    displayLarge: { fontFamily: fonts.extraBold, fontWeight: '800' },
    displayMedium: { fontFamily: fonts.extraBold, fontWeight: '800' },
    displaySmall: { fontFamily: fonts.bold, fontWeight: '700' },
    headlineLarge: { fontFamily: fonts.bold, fontWeight: '700' },
    headlineMedium: { fontFamily: fonts.bold, fontWeight: '700' },
    headlineSmall: { fontFamily: fonts.semiBold, fontWeight: '600' },
    titleLarge: { fontFamily: fonts.bold, fontWeight: '700' },
    titleMedium: { fontFamily: fonts.semiBold, fontWeight: '600' },
    titleSmall: { fontFamily: fonts.semiBold, fontWeight: '600' },
    labelLarge: { fontFamily: fonts.semiBold, fontWeight: '600' },
    labelMedium: { fontFamily: fonts.medium, fontWeight: '500' },
    labelSmall: { fontFamily: fonts.medium, fontWeight: '500' },
    bodyLarge: { fontFamily: fonts.regular, fontWeight: '400' },
    bodyMedium: { fontFamily: fonts.regular, fontWeight: '400' },
    bodySmall: { fontFamily: fonts.regular, fontWeight: '400' },
  },
});

export const favsTheme = {
  ...MD3LightTheme,
  fonts: nunito,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.orange,
    secondary: colors.amber,
    background: colors.cream,
    surface: colors.white,
    onSurface: colors.muted,
  },
  roundness: 16,
};
