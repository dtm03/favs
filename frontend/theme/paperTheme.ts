import { MD3LightTheme } from 'react-native-paper';
import { colors } from './colors';

export const favsTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.orange,
    secondary: colors.amber,
    background: colors.cream,
    surface: colors.white,
    onSurface: colors.charcoal,
  },
  roundness: 16,
};
