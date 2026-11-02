import { Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import { headerIconButtonStyles } from '../styles/HeaderIconButton.styles';
import { colors } from '../theme/colors';

type Props = {
  /** Material Community icon name, e.g. `account` or `chevron-left` */
  icon: string;
  onPress: () => void;
  accessibilityLabel: string;
};

/**
 * The only button in a screen header. IconButton is display-only so the
 * Pressable owns the touch target and the pressed colour.
 */
export function HeaderIconButton({ icon, onPress, accessibilityLabel }: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={headerIconButtonStyles.button}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {({ pressed }) => (
        <IconButton
          pointerEvents="none"
          icon={icon}
          iconColor={pressed ? colors.orange : colors.muted}
          size={26}
          containerColor="transparent"
          rippleColor="transparent"
          style={headerIconButtonStyles.icon}
        />
      )}
    </Pressable>
  );
}
