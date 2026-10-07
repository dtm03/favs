import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { profileHeaderButtonStyles } from '../styles/ProfileHeaderButton.styles';
import { colors } from '../theme/colors';

type Props = {
  onPress: () => void;
};

export function ProfileHeaderButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        profileHeaderButtonStyles.button,
        pressed && { opacity: 0.85, transform: [{ scale: 0.96 }] },
      ]}
      accessibilityRole="button"
      accessibilityLabel="Profil anpassen"
    >
      <MaterialCommunityIcons name="account-circle" size={28} color={colors.white} />
    </Pressable>
  );
}
