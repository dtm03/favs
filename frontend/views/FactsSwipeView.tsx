import { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { FactBubble } from "../components/FactBubble";
import type { Profile } from "../data/mockData";
import { factsSwipeViewStyles } from "../styles/FactsSwipeView.styles";

type Props = {
  profile: Profile;
};

type Position = {
  left: number;
  top: number;
};

// Estimated size per bubble for overlap detection
const BUBBLE_SIZE = 110;

export function FactsSwipeView({ profile }: Props) {
  const [positions, setPositions] = useState<Position[]>([]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (width <= 0 || height <= 0) return;

    const newPositions: Position[] = [];
    const padding = 16;
    const maxLeft = width - BUBBLE_SIZE - padding;
    const maxTop = height - BUBBLE_SIZE - padding;

    profile.favs.forEach(() => {
      let placed = false;
      let attempts = 0;
      let pos: Position = { left: 0, top: 0 };

      // Try finding a non-overlapping spot up to 100 times per bubble
      while (!placed && attempts < 100) {
        attempts++;
        pos = {
          left: Math.random() * (maxLeft - padding) + padding,
          top: Math.random() * (maxTop - padding) + padding,
        };

        // Check if this position collides with any already placed bubble
        const hasOverlap = newPositions.some(
          (p) =>
            Math.abs(p.left - pos.left) < BUBBLE_SIZE &&
            Math.abs(p.top - pos.top) < BUBBLE_SIZE,
        );

        if (!hasOverlap) {
          placed = true;
        }
      }

      newPositions.push(pos);
    });

    setPositions(newPositions);
  };

  return (
    <View style={factsSwipeViewStyles.wrapper} onLayout={handleLayout}>
      {positions.length > 0 &&
        profile.favs.map((fav, index) => {
          const pos = positions[index];
          return (
            <View
              key={fav.category}
              style={[
                factsSwipeViewStyles.absoluteBubble,
                pos ? { left: pos.left, top: pos.top } : null,
              ]}
            >
              <FactBubble item={fav} />
            </View>
          );
        })}
    </View>
  );
}
