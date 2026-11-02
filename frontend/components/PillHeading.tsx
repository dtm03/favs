import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { pillContentStyles } from '../styles/PillContent.styles';
import { textStyles } from '../theme/typography';

type Props = {
  label: string;
  emoji?: string;
  style?: StyleProp<ViewStyle>;
};

/** Orange caps label used as the title of every pill — fav category, field name, chat partner. */
export function PillHeading({ label, emoji, style }: Props) {
  return (
    <View style={[pillContentStyles.headingRow, style]}>
      {emoji ? <Text style={textStyles.pillHeadingEmoji}>{emoji}</Text> : null}
      <Text
        style={[textStyles.pillHeading, pillContentStyles.headingLabel]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );
}
