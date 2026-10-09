import { Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { profileHeaderButtonStyles } from "../styles/ProfileHeaderButton.styles";
import { colors } from "../theme/colors";

type Props = {
  onPress: () => void;
};

export function ProfileHeaderButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={profileHeaderButtonStyles.button}
      accessibilityRole="button"
      accessibilityLabel="Profil anpassen"
    >
      {({ pressed }) => (
        <IconButton
          icon="account"
          iconColor={pressed ? colors.orange : colors.muted}
          size={28}
        />
      )}
    </Pressable>
  );
}
