import { ScrollView, Text, View } from 'react-native';
import { ChatListItem } from '../components/ChatListItem';
import { ProfileHeaderButton } from '../components/ProfileHeaderButton';
import { chatPreviews } from '../data/mockData';
import { homeTabHeaderStyles } from '../styles/HomeTabHeader.styles';
import { chatsScreenStyles } from '../styles/ChatsScreen.styles';

type Props = {
  onOpenChat: (chatId: string, name: string) => void;
  onOpenProfile: () => void;
};

export function ChatsScreen({ onOpenChat, onOpenProfile }: Props) {
  return (
    <View style={chatsScreenStyles.container}>
      <View style={[homeTabHeaderStyles.headerBlock, chatsScreenStyles.headerInset]}>
        <View style={homeTabHeaderStyles.titleLine}>
          <Text
            style={[
              homeTabHeaderStyles.title,
              homeTabHeaderStyles.titleWithTrailingSlot,
            ]}
            numberOfLines={1}
          >
            Chats
          </Text>
          <View style={homeTabHeaderStyles.headerTrailingAction}>
            <ProfileHeaderButton onPress={onOpenProfile} />
          </View>
        </View>
        <Text style={homeTabHeaderStyles.subtitle} numberOfLines={2}>
          {' '}
        </Text>
      </View>
      <ScrollView contentContainerStyle={chatsScreenStyles.list}>
        {chatPreviews.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} onPress={() => onOpenChat(chat.id, chat.name)} />
        ))}
      </ScrollView>
    </View>
  );
}
