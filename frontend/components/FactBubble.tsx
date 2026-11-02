import { Text, View } from 'react-native';
import type { FavItem } from '../data/mockData';
import { favCategoryEmoji } from '../theme/favCategories';
import { LiquidGlassView } from './LiquidGlassView';
import { factBubbleStyles } from '../styles/FactBubble.styles';

type Props = {
  item: FavItem;
  width: number;
  height: number;
  cornerRadii: number;
};

export function FactBubble({ item, width, height, cornerRadii }: Props) {
  return (
    <LiquidGlassView
      style={[factBubbleStyles.bubbleContainer, { width, height }]}
      contentStyle={factBubbleStyles.bubbleContent}
      cornerRadii={cornerRadii}
    >
      <View style={factBubbleStyles.categoryRow}>
        <Text style={factBubbleStyles.emoji}>{favCategoryEmoji(item.category)}</Text>
        <Text style={factBubbleStyles.category} numberOfLines={1}>
          {item.category}
        </Text>
      </View>
      <Text style={factBubbleStyles.value} numberOfLines={1}>
        {item.value}
      </Text>
    </LiquidGlassView>
  );
}
