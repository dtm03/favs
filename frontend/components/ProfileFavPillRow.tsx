import { Text } from 'react-native';
import type { FavItem } from '../data/mockData';
import { favCategoryEmoji } from '../theme/favCategories';
import { Pill } from './Pill';
import { PillHeading } from './PillHeading';
import { pillContentStyles } from '../styles/PillContent.styles';
import { PILL_ROW_HEIGHT } from '../theme/pills';
import { textStyles } from '../theme/typography';

type Props = {
  item: FavItem;
  width: number;
};

/** Profile grid cell — same stacked layout as a swipe bubble, at row height. */
export function ProfileFavPillRow({ item, width }: Props) {
  return (
    <Pill
      height={PILL_ROW_HEIGHT}
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
