import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabBar } from '../components/BottomTabBar';
import { ScreenContainer } from '../components/ScreenContainer';
import type { RootStackParamList, MainTab } from '../navigation/types';
import { ChatsScreen } from './ChatsScreen';
import { SwipeScreen } from './SwipeScreen';
import { homeScreenStyles } from '../styles/HomeScreen.styles';
import {
  BOTTOM_TAB_BAR_HEIGHT,
  BOTTOM_TAB_BAR_MARGIN,
} from '../theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<MainTab>('swipe');
  const insets = useSafeAreaInsets();

  return (
    <ScreenContainer>
      <View
        style={[
          homeScreenStyles.content,
          {
            paddingBottom:
              BOTTOM_TAB_BAR_HEIGHT + insets.bottom + BOTTOM_TAB_BAR_MARGIN,
          },
        ]}
      >
        {activeTab === 'chats' ? (
          <ChatsScreen
            onOpenChat={(chatId, name) =>
              navigation.navigate('ChatDetail', { chatId, name })
            }
            onOpenProfile={() => navigation.navigate('ProfileEdit')}
          />
        ) : (
          <SwipeScreen />
        )}
      </View>
      <BottomTabBar
        activeTab={activeTab}
        onChange={setActiveTab}
        bottomInset={insets.bottom}
        bottomMargin={BOTTOM_TAB_BAR_MARGIN}
      />
    </ScreenContainer>
  );
}
