import { colors } from './colors';

/**
 * Glass fills. One entry per pill tone — `GlassInterior` renders whichever
 * tone it is handed, so a new fill means a new entry here and nothing else.
 */
export type GlassTone = 'neutral' | 'sent' | 'received';

type GlassToneTokens = {
  /** Native Liquid Glass tint (iOS) */
  tint: string;
  /** Flat wash on top of the blur so the Expo Go fallback matches */
  wash: string;
  /** Vertical depth gradient */
  plate: readonly [string, string, string];
  blurIntensity: number;
  blurTint: 'light' | 'default';
  specularOpacity: number;
  /** 0 hides the diagonal sheen and top gloss (coloured fills) */
  glossOpacity: number;
};

export const GLASS_TONES: Record<GlassTone, GlassToneTokens> = {
  /** White / warm beige, no orange cast — fav bubbles, chat rows, profile */
  neutral: {
    tint: 'rgba(255, 255, 255, 0.28)',
    wash: 'rgba(255, 250, 245, 0.22)',
    plate: [
      'rgba(255, 255, 255, 0.72)',
      'rgba(255, 252, 248, 0.42)',
      'rgba(245, 235, 225, 0.28)',
    ],
    blurIntensity: 48,
    blurTint: 'light',
    specularOpacity: 0.78,
    glossOpacity: 0.55,
  },
  /** Own chat message — orange fill */
  sent: {
    tint: colors.orangeAlpha(0.32),
    wash: colors.orangeAlpha(0.22),
    plate: [
      colors.orangeAlpha(0.52),
      colors.orangeAlpha(0.38),
      colors.orangeAlpha(0.28),
    ],
    blurIntensity: 36,
    blurTint: 'default',
    specularOpacity: 0.35,
    glossOpacity: 0,
  },
  /** Incoming chat message — cream fill */
  received: {
    tint: 'rgba(255, 252, 248, 0.55)',
    wash: 'rgba(255, 248, 240, 0.45)',
    plate: [
      'rgba(255, 255, 255, 0.88)',
      'rgba(255, 248, 240, 0.78)',
      'rgba(245, 235, 224, 0.62)',
    ],
    blurIntensity: 44,
    blurTint: 'light',
    specularOpacity: 0.65,
    glossOpacity: 0,
  },
};
