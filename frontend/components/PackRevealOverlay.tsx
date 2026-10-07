import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { packRevealOverlayStyles } from '../styles/PackRevealOverlay.styles';
import { colors } from '../theme/colors';

type Props = {
  visible: boolean;
  onFinish: () => void;
};

export function PackRevealOverlay({ visible, onFinish }: Props) {
  const scale = useSharedValue(0.2);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (!visible) return;

    opacity.value = withTiming(1, { duration: 120 });
    scale.value = withSequence(
      withTiming(1.35, { duration: 420, easing: Easing.out(Easing.cubic) }),
      withTiming(1, { duration: 200 }),
    );

    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 280 });
      setTimeout(onFinish, 300);
    }, 900);

    return () => clearTimeout(timer);
  }, [visible, onFinish, opacity, scale]);

  const burstStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  if (!visible) return null;

  return (
    <Animated.View style={[packRevealOverlayStyles.overlay, overlayStyle]} pointerEvents="none">
      <Animated.View style={burstStyle}>
        <LinearGradient
          colors={[colors.amber, colors.orange, colors.ember]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={packRevealOverlayStyles.burst}
        />
      </Animated.View>
      <Text style={packRevealOverlayStyles.label}>FAVS!</Text>
    </Animated.View>
  );
}
