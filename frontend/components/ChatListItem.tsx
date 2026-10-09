import { Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
      style={({ pressed }) => [
        chatListItemStyles.shadowHost,
        pressed && chatListItemStyles.pressed,
      ]}
    >
      <View style={chatListItemStyles.card}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.98)', 'rgba(255, 248, 240, 0.92)']}
          style={chatListItemStyles.cardFill}
        />
        <View style={chatListItemStyles.highlightEdge} pointerEvents="none" />
        <View style={chatListItemStyles.row}>
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
        </View>
      </View>
    </Pressable>
  );
}
