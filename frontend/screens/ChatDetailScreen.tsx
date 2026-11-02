import { ScrollView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-paper';
import { MessageBubble } from '../components/MessageBubble';
import { exampleChatMessages } from '../data/mockData';
import type { RootStackParamList } from '../navigation/types';
import { chatDetailScreenStyles } from '../styles/ChatDetailScreen.styles';
import { colors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatDetail'>;

export function ChatDetailScreen({ route }: Props) {
  const { name } = route.params;

  return (
    <View style={chatDetailScreenStyles.container}>
      <ScrollView style={chatDetailScreenStyles.messages}>
        {exampleChatMessages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </ScrollView>
      <View style={chatDetailScreenStyles.inputRow}>
        <TextInput
          mode="outlined"
          dense
          placeholder={`Nachricht an ${name}…`}
          placeholderTextColor={colors.muted}
          style={chatDetailScreenStyles.input}
          outlineStyle={chatDetailScreenStyles.inputOutline}
          contentStyle={{
            paddingVertical: 0,
            marginVertical: 0,
            paddingHorizontal: 18,
            lineHeight: 21,
          }}
          outlineColor={colors.orange}
          activeOutlineColor={colors.orange}
        />
      </View>
    </View>
  );
}
