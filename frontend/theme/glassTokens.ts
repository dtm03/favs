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

/** Inner glass — white / warm beige, no orange cast */
export const NEUTRAL_GLASS_TINT = 'rgba(255, 255, 255, 0.28)';

export const NEUTRAL_GLASS_WASH = 'rgba(255, 250, 245, 0.22)';

/** Inner depth without orange — white → warm beige (replaces old orange plate) */
export const NEUTRAL_PLATE_COLORS = [
  'rgba(255, 255, 255, 0.72)',
  'rgba(255, 252, 248, 0.42)',
  'rgba(245, 235, 225, 0.28)',
] as const;

export const LIQUID_PILL_PLATE_COLORS = [
  'rgba(255, 255, 255, 0.72)',
  'rgba(255, 255, 255, 0.38)',
  'rgba(255, 248, 240, 0.28)',
] as const;

/** Initial capsule radius until LiquidGlassPill measures height / 2 */
export const CHAT_PILL_RADIUS = 38;

/** Chat detail — sent (own) message fill */
export const SENT_MESSAGE_TINT = colors.orangeAlpha(0.32);
export const SENT_MESSAGE_WASH = colors.orangeAlpha(0.22);
export const SENT_MESSAGE_PLATE_COLORS = [
  colors.orangeAlpha(0.52),
  colors.orangeAlpha(0.38),
  colors.orangeAlpha(0.28),
] as const;

/** Chat detail — received message fill (cream) */
export const RECEIVED_MESSAGE_TINT = 'rgba(255, 252, 248, 0.55)';
export const RECEIVED_MESSAGE_WASH = 'rgba(255, 248, 240, 0.45)';
export const RECEIVED_MESSAGE_PLATE_COLORS = [
  'rgba(255, 255, 255, 0.88)',
  'rgba(255, 248, 240, 0.78)',
  'rgba(245, 235, 224, 0.62)',
] as const;

/** ~one-line message pill: 11+21+4+12+11 padding/text/time */
export const MESSAGE_SINGLE_LINE_HEIGHT = 59;

export const MESSAGE_COMPOSER_HEIGHT = MESSAGE_SINGLE_LINE_HEIGHT;
export const MESSAGE_COMPOSER_RADIUS = MESSAGE_COMPOSER_HEIGHT / 2;
