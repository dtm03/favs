export type RootStackParamList = {
  Home: undefined;
  ChatDetail: { chatId: string; name: string };
  ProfileEdit: undefined;
};

export type MainTab = 'chats' | 'swipe';
