import { Text } from 'react-native';
import type { FavItem } from '../data/mockData';
import { favCategoryEmoji } from '../theme/favCategories';
import { Pill } from './Pill';
import { PillHeading } from './PillHeading';
import { pillContentStyles } from '../styles/PillContent.styles';
import { textStyles } from '../theme/typography';

type Props = {
  item: FavItem;
  width: number;
  height: number;
  cornerRadius: number;
};

/** Floating fav bubble on the swipe screen. */
export function FactBubble({ item, width, height, cornerRadius }: Props) {
  return (
    <Pill
      height={height}
      radius={cornerRadius}
      elevated
      style={{ width }}
      contentStyle={pillContentStyles.centered}
    >
      <PillHeading emoji={favCategoryEmoji(item.category)} label={item.category} />
      <Text
        style={[textStyles.pillValue, pillContentStyles.centeredValue]}
        numberOfLines={1}
      >
        {item.value}
      </Text>
    </Pill>
  );
}
