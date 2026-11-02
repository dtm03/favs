import { Text, View } from 'react-native';
import type { ChatMessage } from '../data/mockData';
import { MessageGlassPill } from './MessageGlassPill';
import { messageBubbleStyles } from '../styles/MessageBubble.styles';

type Props = {
  message: ChatMessage;
};

export function MessageBubble({ message }: Props) {
  const tone = message.sent ? 'sent' : 'received';

  return (
    <View
      style={[
        messageBubbleStyles.row,
        message.sent ? messageBubbleStyles.rowSent : messageBubbleStyles.rowReceived,
      ]}
    >
      <MessageGlassPill tone={tone} contentStyle={messageBubbleStyles.pillContent}>
        <Text
          style={[
            messageBubbleStyles.text,
            message.sent ? messageBubbleStyles.textSent : messageBubbleStyles.textReceived,
          ]}
        >
          {message.text}
        </Text>
        <Text
          style={[
            messageBubbleStyles.time,
            message.sent ? messageBubbleStyles.timeSent : messageBubbleStyles.timeReceived,
          ]}
        >
          {message.time}
        </Text>
      </MessageGlassPill>
    </View>
  );
}
