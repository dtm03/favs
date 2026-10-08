import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabBar } from '../components/BottomTabBar';
import type { RootStackParamList, MainTab } from '../navigation/types';
import { ChatsScreen } from './ChatsScreen';
import { SwipeScreen } from './SwipeScreen';
import { homeScreenStyles } from '../styles/HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<MainTab>('swipe');
  const insets = useSafeAreaInsets();

  const handleOpenProfile = () => navigation.navigate('ProfileEdit');

  return (
    <View
      style={[
        homeScreenStyles.root,
        {
          paddingTop: insets.top + 16,
        },
      ]}
    >
      <View style={homeScreenStyles.content}>
        {activeTab === 'chats' ? (
          <ChatsScreen
            onOpenChat={(chatId, name) => navigation.navigate('ChatDetail', { chatId, name })}
            onOpenProfile={handleOpenProfile}
          />
        ) : (
          <SwipeScreen onOpenProfile={handleOpenProfile} />
        )}
      </View>
      <BottomTabBar
        activeTab={activeTab}
        onChange={setActiveTab}
        bottomInset={insets.bottom}
      />
    </View>
  );
}
