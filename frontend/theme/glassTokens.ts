import { colors } from './colors';

/** Native glass — title orange, not peach/cream */
export const ORANGE_GLASS_TINT = colors.orangeAlpha(0.14);

/** Plate gradient: white base → stronger E85D04 wash (low blue = less peach) */
export const BUBBLE_PLATE_COLORS = [
  'rgba(255, 255, 255, 0.92)',
  colors.orangeAlpha(0.1),
  colors.orangeAlpha(0.17),
] as const;

/** Uniform wash on top of blur so Expo Go matches native hue */
export const BUBBLE_GLASS_WASH = colors.orangeAlpha(0.09);

export const LIGHT_ORANGE_PLATE = '#FFFFFF';
export const ORANGE_LENS_SHADOW = colors.orange;
