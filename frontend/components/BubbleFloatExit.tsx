import { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { pseudoRandom } from '../theme/bubbleShapes';

type Props = {
  exitProgress: SharedValue<number>;
  motionSeed: number;
  floatDistance: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

/** Favs float upward and fade when revealing photos */
export function BubbleFloatExit({
  exitProgress,
  motionSeed,
  floatDistance,
  style,
  children,
}: Props) {
  const stagger = useMemo(
    () => pseudoRandom(motionSeed + 901) * 0.44,
    [motionSeed],
  );
  const exitWindow = useMemo(
    () => 0.5 + pseudoRandom(motionSeed + 902) * 0.32,
    [motionSeed],
  );
  const driftXMax = useMemo(
    () => (pseudoRandom(motionSeed + 903) > 0.5 ? 1 : -1) * (10 + pseudoRandom(motionSeed + 904) * 14),
    [motionSeed],
  );
  const floatBoost = useMemo(
    () => 0.88 + pseudoRandom(motionSeed + 905) * 0.28,
    [motionSeed],
  );
  const scaleBoost = useMemo(
    () => 0.06 + pseudoRandom(motionSeed + 906) * 0.08,
    [motionSeed],
  );

  const animatedStyle = useAnimatedStyle(() => {
    const t = interpolate(
      exitProgress.value,
      [stagger, Math.min(1, stagger + exitWindow)],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity: 1 - t * 0.96,
      transform: [
        { translateX: driftXMax * t },
        { translateY: -t * floatDistance * floatBoost },
        { scale: 1 + t * scaleBoost },
      ],
    };
  }, [driftXMax, exitWindow, floatBoost, floatDistance, scaleBoost, stagger]);

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
}
