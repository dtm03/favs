import { CONTENT_GAP } from './layout';

/**
 * Pills share one rim and one radius everywhere; only height and content differ.
 * Keep the number of distinct heights small — a row, and a double row for Bio.
 */

/** Chat row, profile field, fav grid cell and message composer all use this */
export const PILL_ROW_HEIGHT = 64;

/** Capsule rim — also used by the double-height Bio pill so corners match */
export const PILL_RADIUS = PILL_ROW_HEIGHT / 2;

/** Bio — exactly two rows tall */
export const PILL_TALL_HEIGHT = PILL_ROW_HEIGHT * 2;

/** Radius used until a content-sized pill (message bubble) has measured itself */
export const PILL_FALLBACK_RADIUS = PILL_RADIUS;

export const PILL_GAP = CONTENT_GAP;

export const PILL_GRID_COLUMNS = 3;
