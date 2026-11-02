import { ScrollView, View } from 'react-native';
import { ChatListItem } from '../components/ChatListItem';
import { HeaderIconButton } from '../components/HeaderIconButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { chatPreviews } from '../data/mockData';
import { chatsScreenStyles } from '../styles/ChatsScreen.styles';

type Props = {
  onOpenChat: (chatId: string, name: string) => void;
  onOpenProfile: () => void;
};

export function ChatsScreen({ onOpenChat, onOpenProfile }: Props) {
  return (
    <View style={chatsScreenStyles.container}>
      <ScreenHeader
        title="Chats"
        action={
          <HeaderIconButton
            icon="account"
            onPress={onOpenProfile}
            accessibilityLabel="Profil anpassen"
          />
        }
      />
      <ScrollView
        contentContainerStyle={chatsScreenStyles.list}
        showsVerticalScrollIndicator={false}
      >
        {chatPreviews.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            onPress={() => onOpenChat(chat.id, chat.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
