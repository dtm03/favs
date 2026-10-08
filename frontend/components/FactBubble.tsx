import { Text, View } from 'react-native';
import type { FavItem } from '../data/mockData';
import { factBubbleStyles } from '../styles/FactBubble.styles';

type Props = {
  item: FavItem;
};

export function FactBubble({ item }: Props) {
  return (
    <View style={factBubbleStyles.bubble}>
      <Text style={factBubbleStyles.category} numberOfLines={1}>
        {item.category}
      </Text>
      <Text style={factBubbleStyles.value} numberOfLines={1} ellipsizeMode="tail">
        {item.value}
      </Text>
    </View>
  );
}
