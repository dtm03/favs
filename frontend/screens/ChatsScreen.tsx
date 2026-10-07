import { ScrollView, Text, View } from 'react-native';
import { ChatListItem } from '../components/ChatListItem';
import { chatPreviews } from '../data/mockData';
import { chatsScreenStyles } from '../styles/ChatsScreen.styles';

type Props = {
  onOpenChat: (chatId: string, name: string) => void;
};

export function ChatsScreen({ onOpenChat }: Props) {
  return (
    <ScrollView style={chatsScreenStyles.container} contentContainerStyle={chatsScreenStyles.list}>
      <Text style={chatsScreenStyles.title}>Chats</Text>
      {chatPreviews.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} onPress={() => onOpenChat(chat.id, chat.name)} />
      ))}
    </ScrollView>
  );
}
