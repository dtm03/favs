import { View } from "react-native";
import { IconButton } from "react-native-paper";
import { bottomTabBarStyles } from "../styles/BottomTabBar.styles";
import type { MainTab } from "../navigation/types";

type Props = {
  activeTab: MainTab;
  onChange: (tab: MainTab) => void;
  bottomInset?: number;
};

export function BottomTabBar({ activeTab, onChange, bottomInset = 0 }: Props) {
  return (
    <View style={[bottomTabBarStyles.bar, { paddingBottom: bottomInset + 16 }]}>
      <IconButton
        icon="message-text"
        iconColor={activeTab === "chats" ? "#FF6B00" : "#888888"}
        size={28}
        onPress={() => onChange("chats")}
      />
      <IconButton
        icon="cards-outline"
        iconColor={activeTab === "swipe" ? "#FF6B00" : "#888888"}
        size={28}
        onPress={() => onChange("swipe")}
      />
    </View>
  );
}
