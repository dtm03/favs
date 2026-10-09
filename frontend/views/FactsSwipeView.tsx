import { useMemo, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import { BubbleFloatExit } from '../components/BubbleFloatExit';
import { FactBubble } from '../components/FactBubble';
import { SwayingBubble } from '../components/SwayingBubble';
import type { FavItem, Profile } from '../data/mockData';
import { factsSwipeViewStyles } from '../styles/FactsSwipeView.styles';
import { bubbleShapeForFav, pseudoRandom } from '../theme/bubbleShapes';

type Props = {
  profile: Profile;
  exitProgress?: SharedValue<number>;
};

type BubbleBox = {
  left: number;
  top: number;
  width: number;
  height: number;
  cornerRadii: number;
};

function estimateBubbleSize(
  fav: FavItem,
  profileId: string,
  index: number,
  containerWidth: number,
) {
  const padding = 10;
  const maxBubbleWidth = Math.min(232, containerWidth - padding * 2);
  return bubbleShapeForFav(profileId, index, fav, maxBubbleWidth);
}

function calculateBubblePositions(
  favs: FavItem[],
  containerWidth: number,
  containerHeight: number,
  profileId: string,
): BubbleBox[] {
  const count = favs.length;
  if (count === 0 || containerWidth <= 0 || containerHeight <= 0) return [];

  const baseSeed = profileId.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 42);

  const padding = 10;
  const usableWidth = Math.max(100, containerWidth - padding * 2);
  const usableHeight = Math.max(100, containerHeight - padding * 2);

  // Group into tiers (e.g. 5 rows for 10 items)
  const rowCount = Math.ceil(count / 2);
  const tierHeight = usableHeight / rowCount;

  const boxes: BubbleBox[] = favs.map((fav, index) => {
    const { width, height, cornerRadii } = estimateBubbleSize(
      fav,
      profileId,
      index,
      containerWidth,
    );
    const row = Math.floor(index / 2);
    const isRight = index % 2 === 1;

    // Organic staggered horizontal anchors
    const staggerShift = (row % 2 === 0 ? 0.05 : -0.05) * usableWidth;
    let baseLeft: number;

    if (!isRight) {
      // Left side: anchored around 12%..28% of width
      const rVal = pseudoRandom(baseSeed + index * 7 + 1);
      const minX = padding;
      const maxX = Math.max(minX, usableWidth * 0.44 - width);
      baseLeft = minX + rVal * (maxX - minX) + staggerShift;
    } else {
      // Right side: anchored around 56%..85% of width
      const rVal = pseudoRandom(baseSeed + index * 7 + 2);
      const minX = usableWidth * 0.52 + padding;
      const maxX = Math.max(minX, containerWidth - width - padding);
      baseLeft = minX + rVal * (maxX - minX) + staggerShift;
    }

    // Vertical placement within row with natural staggering
    const rY = pseudoRandom(baseSeed + index * 13 + 3);
    const rowTop = padding + row * tierHeight;
    const slackY = Math.max(4, tierHeight - height);
    // Alternate which bubble in the row sits slightly higher
    const verticalBias = isRight !== (row % 2 === 0) ? 0.15 : 0.65;
    const baseTop = rowTop + Math.min(slackY, Math.max(0, (verticalBias + (rY - 0.5) * 0.4) * slackY));

    return {
      left: Math.max(padding, Math.min(containerWidth - width - padding, baseLeft)),
      top: Math.max(padding, Math.min(containerHeight - height - padding, baseTop)),
      width,
      height,
      cornerRadii,
    };
  });

  // Iterative collision resolution to GUARANTEE zero overlaps
  const minGapX = 12;
  const minGapY = 10;

  for (let iter = 0; iter < 40; iter++) {
    let moved = false;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const a = boxes[i];
        const b = boxes[j];

        const reqDistX = (a.width + b.width) / 2 + minGapX;
        const reqDistY = (a.height + b.height) / 2 + minGapY;

        const centerAX = a.left + a.width / 2;
        const centerAY = a.top + a.height / 2;
        const centerBX = b.left + b.width / 2;
        const centerBY = b.top + b.height / 2;

        const distX = centerAX - centerBX;
        const distY = centerAY - centerBY;

        const overlapX = reqDistX - Math.abs(distX);
        const overlapY = reqDistY - Math.abs(distY);

        if (overlapX > 0 && overlapY > 0) {
          moved = true;
          // Resolve along the axis of smaller relative penetration
          if (overlapX / reqDistX < overlapY / reqDistY) {
            const push = (overlapX / 2 + 1) * (distX >= 0 ? 1 : -1);
            a.left += push;
            b.left -= push;
          } else {
            const push = (overlapY / 2 + 1) * (distY >= 0 ? 1 : -1);
            a.top += push;
            b.top -= push;
          }
        }
      }
    }

    // Keep all boxes strictly inside the container bounds
    for (let i = 0; i < count; i++) {
      boxes[i].left = Math.max(padding, Math.min(containerWidth - boxes[i].width - padding, boxes[i].left));
      boxes[i].top = Math.max(padding, Math.min(containerHeight - boxes[i].height - padding, boxes[i].top));
    }

    if (!moved) break;
  }

  return boxes;
}

export function FactsSwipeView({ profile, exitProgress }: Props) {
  const [layout, setLayout] = useState<{ width: number; height: number } | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (width > 0 && height > 0) {
      setLayout((prev) => {
        if (prev && Math.abs(prev.width - width) < 2 && Math.abs(prev.height - height) < 2) {
          return prev;
        }
        return { width, height };
      });
    }
  };

  const positions = useMemo(() => {
    if (!layout) return [];
    return calculateBubblePositions(profile.favs, layout.width, layout.height, profile.id);
  }, [profile.favs, profile.id, layout]);

  return (
    <View style={factsSwipeViewStyles.wrapper} onLayout={handleLayout}>
      {positions.length > 0 &&
        profile.favs.map((fav, index) => {
          const pos = positions[index];
          if (!pos) return null;
          const motionSeed =
            profile.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 42) + index * 31;

          const positionedStyle = [
            factsSwipeViewStyles.absoluteBubble,
            {
              left: pos.left,
              top: pos.top,
              width: pos.width,
              height: pos.height,
            },
          ];

          const floatDistance = (layout?.height ?? 420) * 0.65 + 48;

          const bubbleContent = (
            <SwayingBubble
              motionSeed={motionSeed}
              style={{ width: pos.width, height: pos.height }}
            >
              <FactBubble
                item={fav}
                width={pos.width}
                height={pos.height}
                cornerRadii={pos.cornerRadii}
              />
            </SwayingBubble>
          );

          if (exitProgress) {
            return (
              <BubbleFloatExit
                key={`${profile.id}-${fav.category}`}
                exitProgress={exitProgress}
                motionSeed={motionSeed}
                floatDistance={floatDistance}
                style={positionedStyle}
              >
                {bubbleContent}
              </BubbleFloatExit>
            );
          }

          return (
            <SwayingBubble
              key={`${profile.id}-${fav.category}`}
              motionSeed={motionSeed}
              style={positionedStyle}
            >
              <FactBubble
                item={fav}
                width={pos.width}
                height={pos.height}
                cornerRadii={pos.cornerRadii}
              />
            </SwayingBubble>
          );
        })}
    </View>
  );
}
