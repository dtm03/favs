import { StyleSheet, TextInput } from 'react-native';
import { Pill } from './Pill';
import { colors } from '../theme/colors';
import { PILL_ROW_HEIGHT } from '../theme/pills';
import { textStyles } from '../theme/typography';

type Props = {
  placeholder: string;
};

/** Message input — the same pill as a chat row, just with a text field inside. */
export function MessageComposer({ placeholder }: Props) {
  return (
    <Pill height={PILL_ROW_HEIGHT} contentStyle={styles.content}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={[textStyles.pillValue, styles.input]}
      />
    </Pill>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    padding: 0,
    margin: 0,
  },
});
