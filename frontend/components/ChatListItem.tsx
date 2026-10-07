import { Pressable, Text, View } from 'react-native';
import type { ChatPreview } from '../data/mockData';
import { chatListItemStyles } from '../styles/ChatListItem.styles';

type Props = {
  chat: ChatPreview;
  onPress: () => void;
};

export function ChatListItem({ chat, onPress }: Props) {
  const initial = chat.name.charAt(0).toUpperCase();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [chatListItemStyles.row, pressed && { opacity: 0.9 }]}
    >
      <View style={chatListItemStyles.avatar}>
        <Text style={chatListItemStyles.avatarText}>{initial}</Text>
      </View>
      <View style={chatListItemStyles.body}>
        <View style={chatListItemStyles.topRow}>
          <Text style={chatListItemStyles.name}>{chat.name}</Text>
          <Text style={chatListItemStyles.time}>{chat.time}</Text>
        </View>
        <Text style={chatListItemStyles.preview} numberOfLines={1}>
          {chat.lastMessage}
        </Text>
      </View>
      {chat.unread > 0 ? (
        <View style={chatListItemStyles.badge}>
          <Text style={chatListItemStyles.badgeText}>{chat.unread}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}
