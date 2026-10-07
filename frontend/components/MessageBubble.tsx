import { Text, View } from 'react-native';
import type { ChatMessage } from '../data/mockData';
import { messageBubbleStyles } from '../styles/MessageBubble.styles';
import { colors } from '../theme/colors';

type Props = {
  message: ChatMessage;
};

export function MessageBubble({ message }: Props) {
  return (
    <View
      style={[
        messageBubbleStyles.row,
        message.sent ? messageBubbleStyles.rowSent : messageBubbleStyles.rowReceived,
      ]}
    >
      <View
        style={[
          messageBubbleStyles.bubble,
          message.sent ? messageBubbleStyles.sent : messageBubbleStyles.received,
        ]}
      >
        <Text
          style={[
            messageBubbleStyles.text,
            message.sent ? messageBubbleStyles.textSent : messageBubbleStyles.textReceived,
          ]}
        >
          {message.text}
        </Text>
        <Text
          style={[messageBubbleStyles.time, { color: message.sent ? colors.white : colors.muted }]}
        >
          {message.time}
        </Text>
      </View>
    </View>
  );
}
