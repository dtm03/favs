/**
 * Screen-level spacing. Every screen reads these so headers and content
 * line up no matter which screen is on top.
 */

/** Header inset — identical on swipe, chats, chat detail and profile */
export const SCREEN_HORIZONTAL_PADDING = 32;

/** Pill lists sit wider than the header so capsules use more screen width */
export const CONTENT_HORIZONTAL_PADDING = 14;

/** Status bar / notch to header */
export const SCREEN_TOP_MARGIN = 16;

/** Header title box — fixed so the title baseline never shifts */
export const HEADER_TITLE_LINE_HEIGHT = 32;
export const HEADER_SUBTITLE_LINE_HEIGHT = 18;

/** Square slot for a header icon button, right of the title */
export const HEADER_ACTION_SLOT = 40;

/** Header to content — the swipe bubbles sit directly under the bio */
export const HEADER_CONTENT_GAP = 10;

/** Scrolling pill lists get extra air under the header */
export const LIST_TOP_INSET = 10;

/** Vertical gap between stacked pills */
export const CONTENT_GAP = 10;

/** Icon row height, excluding the home-indicator inset */
export const BOTTOM_TAB_BAR_HEIGHT = 44;

/** Extra space above the home indicator; 0 keeps icons as low as safe */
export const BOTTOM_TAB_BAR_MARGIN = 0;
