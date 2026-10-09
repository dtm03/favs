import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OrangeRadialBackground } from '../components/OrangeRadialBackground';
import { BottomTabBar } from '../components/BottomTabBar';
import type { RootStackParamList, MainTab } from '../navigation/types';
import { ChatsScreen } from './ChatsScreen';
import { SwipeScreen } from './SwipeScreen';
import {
  homeScreenStyles,
  HOME_TOP_MARGIN,
  HOME_BOTTOM_TAB_MARGIN,
  BOTTOM_TAB_BAR_HEIGHT,
} from '../styles/HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<MainTab>('swipe');
  const insets = useSafeAreaInsets();

  const handleOpenProfile = () => navigation.navigate('ProfileEdit');

  return (
    <View style={homeScreenStyles.root}>
      <OrangeRadialBackground />
      <View
        style={[
          homeScreenStyles.foreground,
          {
            paddingTop: insets.top + HOME_TOP_MARGIN,
          },
        ]}
      >
        <View
          style={[
            homeScreenStyles.content,
            { paddingBottom: BOTTOM_TAB_BAR_HEIGHT + insets.bottom + HOME_BOTTOM_TAB_MARGIN },
          ]}
        >
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
          bottomMargin={HOME_BOTTOM_TAB_MARGIN}
        />
      </View>
    </View>
  );
}
