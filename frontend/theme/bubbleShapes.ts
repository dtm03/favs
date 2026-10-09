import type { ViewStyle } from 'react-native';
import type { FavItem } from '../data/mockData';

/** Uniform radius only — always a stadium / circle capsule from width × height */
export type BubbleCornerRadii = number;

/** Must match `factBubbleStyles.bubbleContent` horizontal padding (each side) */
export const BUBBLE_PADDING_H = 12;
const WIDTH_SAFETY = 4;

export function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function profileSeed(profileId: string) {
  return profileId.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 42);
}

function lerp(min: number, max: number, t: number) {
  return min + (max - min) * t;
}

/** Smallest width that should fit category + value on one line each */
export function minBubbleWidthForText(fav: FavItem): number {
  const catLen = fav.category.length * 7.2 + fav.category.length * 0.65;
  const valLen = fav.value.length * 8.4;
  const textWidth = Math.max(catLen, valLen);
  return Math.ceil(textWidth + BUBBLE_PADDING_H * 2 + WIDTH_SAFETY);
}

/** Fully rounded ends: circle when w ≈ h, horizontal pill when w ≫ h */
export function capsuleBorderRadius(width: number, height: number): number {
  return Math.round(Math.min(width, height) / 2);
}

/** skewHigh: favor upper tier indices (rounder heights) */
function pickTier(seed: number, tierCount: number, skewHigh: boolean): number {
  const r = pseudoRandom(seed);
  const t = skewHigh ? 1 - (1 - r) ** 1.65 : r ** 2.35;
  return Math.min(tierCount - 1, Math.floor(t * tierCount));
}

function widthForTier(minWidth: number, tier: number, seed: number, maxWidth: number): number {
  let extra: number;
  switch (tier) {
    case 0:
      extra = 0;
      break;
    case 1:
      extra = lerp(0, 6, pseudoRandom(seed + 11));
      break;
    case 2:
      extra = lerp(4, 12, pseudoRandom(seed + 12));
      break;
    case 3:
      extra = lerp(8, 18, pseudoRandom(seed + 13));
      break;
    default:
      extra = lerp(12, 24, pseudoRandom(seed + 14));
      break;
  }
  return Math.min(maxWidth, Math.round(minWidth + extra));
}

function heightForTier(width: number, tier: number, seed: number): number {
  let height: number;
  switch (tier) {
    case 0:
      height = Math.round(lerp(54, 62, pseudoRandom(seed + 20)));
      break;
    case 1:
      height = Math.round(lerp(66, 76, pseudoRandom(seed + 21)));
      break;
    case 2:
      height = Math.round(lerp(80, 92, pseudoRandom(seed + 22)));
      break;
    case 3:
      height = Math.round(lerp(94, 108, pseudoRandom(seed + 23)));
      break;
    default:
      height = Math.round(
        lerp(width * 0.84, Math.min(width, 148), pseudoRandom(seed + 24)),
      );
      break;
  }
  return Math.min(width, Math.max(52, height));
}

/**
 * Stable per-fav size: width ≥ text minimum with extra by tier; height in 5 tiers (pill → round).
 */
export function bubbleShapeForFav(
  profileId: string,
  favIndex: number,
  fav: FavItem,
  maxWidth: number,
) {
  const seed = profileSeed(profileId) + favIndex * 31;
  const minWidth = minBubbleWidthForText(fav);
  const safeMax = Math.max(minWidth, maxWidth);

  const widthTier = pickTier(seed + 5, 5, false);
  const heightTier = pickTier(seed + 6, 5, true);

  const width = widthForTier(minWidth, widthTier, seed, safeMax);
  const height = heightForTier(width, heightTier, seed);

  return {
    width,
    height,
    cornerRadii: capsuleBorderRadius(width, height),
  };
}

export function cornerRadiiToStyle(radii: BubbleCornerRadii): ViewStyle {
  return { borderRadius: radii };
}

export function maxCornerRadius(radii: BubbleCornerRadii): number {
  return radii;
}
