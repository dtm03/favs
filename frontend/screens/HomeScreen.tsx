import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileHeaderButton } from '../components/ProfileHeaderButton';
import { BottomTabBar } from '../components/BottomTabBar';
import type { RootStackParamList, MainTab } from '../navigation/types';
import { ChatsScreen } from './ChatsScreen';
import { SwipeScreen } from './SwipeScreen';
import { homeScreenStyles } from '../styles/HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<MainTab>('swipe');

  return (
    <SafeAreaView style={homeScreenStyles.root} edges={['top', 'left', 'right']}>
      <View style={homeScreenStyles.header}>
        <ProfileHeaderButton onPress={() => navigation.navigate('ProfileEdit')} />
      </View>
      <View style={homeScreenStyles.content}>
        {activeTab === 'chats' ? (
          <ChatsScreen
            onOpenChat={(chatId, name) => navigation.navigate('ChatDetail', { chatId, name })}
          />
        ) : (
          <SwipeScreen />
        )}
      </View>
      <BottomTabBar activeTab={activeTab} onChange={setActiveTab} />
    </SafeAreaView>
  );
}
