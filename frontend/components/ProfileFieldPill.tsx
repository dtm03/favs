import { Text } from 'react-native';
import { Pill } from './Pill';
import { PillHeading } from './PillHeading';
import { pillContentStyles } from '../styles/PillContent.styles';
import { PILL_RADIUS, PILL_ROW_HEIGHT, PILL_TALL_HEIGHT } from '../theme/pills';
import { textStyles } from '../theme/typography';

type Props = {
  emoji: string;
  label: string;
  value: string;
  /** More than one line stacks the value under the heading (Bio) */
  valueLines?: number;
};

/** Full-width profile field. One row for Name and Stadt, two rows for Bio. */
export function ProfileFieldPill({ emoji, label, value, valueLines = 1 }: Props) {
  const stacked = valueLines > 1;

  return (
    <Pill
      height={stacked ? PILL_TALL_HEIGHT : PILL_ROW_HEIGHT}
      radius={PILL_RADIUS}
      contentStyle={stacked ? pillContentStyles.stacked : pillContentStyles.inline}
    >
      <PillHeading emoji={emoji} label={label} />
      <Text
        style={[
          textStyles.pillValue,
          stacked ? pillContentStyles.stackedValue : pillContentStyles.inlineValue,
        ]}
        numberOfLines={valueLines}
      >
        {value}
      </Text>
    </Pill>
  );
}
