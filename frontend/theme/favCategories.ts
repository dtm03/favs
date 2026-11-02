import type { FavCategory } from "../data/mockData";

export const FAV_CATEGORY_EMOJI: Record<FavCategory, string> = {
  Essen: "🍜",
  Urlaubsort: "🌍",
  Film: "🎬",
  Serie: "📺",
  Song: "🎵",
  Band: "🎸",
  Schulfach: "📚",
  Sprache: "🗣️",
  Bar: "🍸",
  Restaurant: "🍽️",
};

export function favCategoryEmoji(category: FavCategory): string {
  return FAV_CATEGORY_EMOJI[category];
}
