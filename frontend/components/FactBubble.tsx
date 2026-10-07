import { Text, View } from 'react-native';
import type { FavItem } from '../data/mockData';
import { factBubbleStyles } from '../styles/FactBubble.styles';

type Props = {
  item: FavItem;
};

export function FactBubble({ item }: Props) {
  return (
    <View style={factBubbleStyles.bubble}>
      <Text style={factBubbleStyles.category}>{item.category}</Text>
      <Text style={factBubbleStyles.value} numberOfLines={2}>
        {item.value}
      </Text>
    </View>
  );
}
