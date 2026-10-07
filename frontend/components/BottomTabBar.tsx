import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { bottomTabBarStyles } from '../styles/BottomTabBar.styles';
import type { MainTab } from '../navigation/types';

type Props = {
  activeTab: MainTab;
  onChange: (tab: MainTab) => void;
};

export function BottomTabBar({ activeTab, onChange }: Props) {
  return (
    <View style={bottomTabBarStyles.bar}>
      <Button
        mode={activeTab === 'chats' ? 'contained' : 'outlined'}
        onPress={() => onChange('chats')}
        style={bottomTabBarStyles.tab}
        icon="message-text"
      >
        Chats
      </Button>
      <Button
        mode={activeTab === 'swipe' ? 'contained' : 'outlined'}
        onPress={() => onChange('swipe')}
        style={bottomTabBarStyles.tab}
        icon="heart"
      >
        Swipen
      </Button>
    </View>
  );
}
