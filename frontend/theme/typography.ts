/** Rounded, friendly face — loaded in App.tsx via @expo-google-fonts/nunito */
export const fonts = {
  regular: 'Nunito_400Regular',
  medium: 'Nunito_500Medium',
  semiBold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
  extraBold: 'Nunito_800ExtraBold',
  black: 'Nunito_900Black',
} as const;

export type FontWeight = keyof typeof fonts;

export function fontFamily(weight: FontWeight = 'regular') {
  return { fontFamily: fonts[weight] };
}
