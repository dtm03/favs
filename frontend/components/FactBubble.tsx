import { Text } from 'react-native';
import type { FavItem } from '../data/mockData';
import { LiquidGlassView } from './LiquidGlassView';
import { factBubbleStyles } from '../styles/FactBubble.styles';

type Props = {
  item: FavItem;
  shapeIndex?: number;
};

export function FactBubble({ item, shapeIndex }: Props) {
  const resolvedShapeIndex =
    shapeIndex !== undefined
      ? shapeIndex
      : item.category.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  return (
    <LiquidGlassView
      shapeIndex={resolvedShapeIndex}
      intensity={40}
      style={factBubbleStyles.bubbleContainer}
      contentStyle={factBubbleStyles.bubbleContent}
    >
      <Text style={factBubbleStyles.category} numberOfLines={1}>
        {item.category}
      </Text>
      <Text style={factBubbleStyles.value} numberOfLines={1} ellipsizeMode="tail">
        {item.value}
      </Text>
    </LiquidGlassView>
  );
}
