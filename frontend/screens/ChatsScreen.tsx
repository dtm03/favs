import { ScrollView, Text, View } from 'react-native';
import { ChatListItem } from '../components/ChatListItem';
import { ProfileHeaderButton } from '../components/ProfileHeaderButton';
import { chatPreviews } from '../data/mockData';
import { chatsScreenStyles } from '../styles/ChatsScreen.styles';

type Props = {
  onOpenChat: (chatId: string, name: string) => void;
  onOpenProfile: () => void;
};

export function ChatsScreen({ onOpenChat, onOpenProfile }: Props) {
  return (
    <View style={chatsScreenStyles.container}>
      <View style={chatsScreenStyles.headerRow}>
        <Text style={chatsScreenStyles.title}>Chats</Text>
        <ProfileHeaderButton onPress={onOpenProfile} />
      </View>
      <ScrollView contentContainerStyle={chatsScreenStyles.list}>
        {chatPreviews.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} onPress={() => onOpenChat(chat.id, chat.name)} />
        ))}
      </ScrollView>
    </View>
  );
}
