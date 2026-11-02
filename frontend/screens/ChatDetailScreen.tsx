import { ScrollView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderIconButton } from '../components/HeaderIconButton';
import { MessageBubble } from '../components/MessageBubble';
import { MessageComposer } from '../components/MessageComposer';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenHeader } from '../components/ScreenHeader';
import { exampleChatMessages } from '../data/mockData';
import type { RootStackParamList } from '../navigation/types';
import { chatDetailScreenStyles } from '../styles/ChatDetailScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatDetail'>;

export function ChatDetailScreen({ route, navigation }: Props) {
  const { name } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <ScreenContainer>
      <ScreenHeader
        title={name}
        action={
          <HeaderIconButton
            icon="chevron-left"
            onPress={() => navigation.goBack()}
            accessibilityLabel="Zurück"
          />
        }
      />

      <ScrollView
        style={chatDetailScreenStyles.messages}
        contentContainerStyle={chatDetailScreenStyles.messagesContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {exampleChatMessages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </ScrollView>

      <View
        style={[
          chatDetailScreenStyles.composerRow,
          { paddingBottom: Math.max(insets.bottom, 10) },
        ]}
      >
        <MessageComposer placeholder={`Nachricht an ${name}…`} />
      </View>
    </ScreenContainer>
  );
}
