import { Text, View } from 'react-native';
import type { ChatMessage } from '../data/mockData';
import { Pill } from './Pill';
import { messageBubbleStyles } from '../styles/MessageBubble.styles';
import { textStyles } from '../theme/typography';

type Props = {
  message: ChatMessage;
};

export function MessageBubble({ message }: Props) {
  const sent = message.sent;

  return (
    <View
      style={[
        messageBubbleStyles.row,
        sent ? messageBubbleStyles.rowSent : messageBubbleStyles.rowReceived,
      ]}
    >
      <Pill
        tone={sent ? 'sent' : 'received'}
        fitContent
        style={messageBubbleStyles.pill}
        contentStyle={messageBubbleStyles.pillContent}
      >
        <Text style={sent ? textStyles.pillValueOnOrange : textStyles.pillValue}>
          {message.text}
        </Text>
        <Text
          style={[
            sent ? textStyles.pillMetaOnOrange : textStyles.pillMeta,
            messageBubbleStyles.time,
          ]}
        >
          {message.time}
        </Text>
      </Pill>
    </View>
  );
}
