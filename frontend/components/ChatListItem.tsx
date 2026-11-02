import { Text, View } from 'react-native';
import { LiquidGlassPill } from './LiquidGlassPill';
import type { ChatPreview } from '../data/mockData';
import { chatListItemStyles } from '../styles/ChatListItem.styles';

type Props = {
  chat: ChatPreview;
  onPress: () => void;
};

export function ChatListItem({ chat, onPress }: Props) {
  const initial = chat.name.charAt(0).toUpperCase();

  return (
    <LiquidGlassPill onPress={onPress} contentStyle={chatListItemStyles.row}>
      <View style={chatListItemStyles.avatar}>
        <Text style={chatListItemStyles.avatarText}>{initial}</Text>
      </View>
      <View style={chatListItemStyles.body}>
        <View style={[chatListItemStyles.lineRow, chatListItemStyles.lineRowFirst]}>
          <Text style={chatListItemStyles.name} numberOfLines={1}>
            {chat.name}
          </Text>
          <Text style={chatListItemStyles.time}>{chat.time}</Text>
        </View>
        <View style={chatListItemStyles.lineRow}>
          <Text style={chatListItemStyles.preview} numberOfLines={1}>
            {chat.lastMessage}
          </Text>
          <View style={chatListItemStyles.badgeSlot}>
            {chat.unread > 0 ? (
              <View style={chatListItemStyles.badge}>
                <Text style={chatListItemStyles.badgeText}>{chat.unread}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </LiquidGlassPill>
  );
}
