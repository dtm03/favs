import { Text, View } from 'react-native';
import type { ChatPreview } from '../data/mockData';
import { Pill } from './Pill';
import { PillHeading } from './PillHeading';
import { chatListItemStyles } from '../styles/ChatListItem.styles';
import { PILL_ROW_HEIGHT } from '../theme/pills';
import { textStyles } from '../theme/typography';

type Props = {
  chat: ChatPreview;
  onPress: () => void;
};

export function ChatListItem({ chat, onPress }: Props) {
  const initial = chat.name.charAt(0).toUpperCase();

  return (
    <Pill
      onPress={onPress}
      height={PILL_ROW_HEIGHT}
      contentStyle={chatListItemStyles.row}
    >
      <View style={chatListItemStyles.avatar}>
        <Text style={chatListItemStyles.avatarText}>{initial}</Text>
      </View>
      <View style={chatListItemStyles.body}>
        <View style={chatListItemStyles.line}>
          <PillHeading label={chat.name} style={chatListItemStyles.nameSlot} />
          <Text style={[textStyles.pillMeta, chatListItemStyles.time]}>
            {chat.time}
          </Text>
        </View>
        <View style={chatListItemStyles.line}>
          <Text style={[textStyles.pillValue, chatListItemStyles.preview]} numberOfLines={1}>
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
    </Pill>
  );
}
