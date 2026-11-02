import { Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { profileHeaderButtonStyles } from "../styles/ProfileHeaderButton.styles";
import { colors } from "../theme/colors";

type Props = {
  onPress: () => void;
};

/** Same pattern as ProfileHeaderButton — IconButton is display-only, Pressable handles tap. */
export function HeaderBackButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={[profileHeaderButtonStyles.button, profileHeaderButtonStyles.backInset]}
      accessibilityRole="button"
      accessibilityLabel="Zurück"
    >
      {({ pressed }) => (
        <IconButton
          pointerEvents="none"
          icon="chevron-left"
          iconColor={pressed ? colors.orange : colors.muted}
          size={26}
          containerColor="transparent"
          rippleColor="transparent"
          style={profileHeaderButtonStyles.icon}
        />
      )}
    </Pressable>
  );
}
