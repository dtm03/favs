import { useEffect, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { pseudoRandom } from '../theme/bubbleShapes';

type Props = {
  motionSeed: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

/** Gentle floating drift — unique phase and speed per bubble */
export function SwayingBubble({ motionSeed, style, children }: Props) {
  const phaseX = useMemo(() => pseudoRandom(motionSeed) * Math.PI * 2, [motionSeed]);
  const phaseY = useMemo(() => pseudoRandom(motionSeed + 17) * Math.PI * 2, [motionSeed]);
  const phaseRot = useMemo(() => pseudoRandom(motionSeed + 41) * Math.PI * 2, [motionSeed]);
  const duration = useMemo(
    () => 3200 + Math.round(pseudoRandom(motionSeed + 23) * 2800),
    [motionSeed],
  );
  const swayX = useMemo(() => 2.5 + pseudoRandom(motionSeed + 29) * 3.5, [motionSeed]);
  const swayY = useMemo(() => 1.5 + pseudoRandom(motionSeed + 31) * 2.5, [motionSeed]);
  const swayRot = useMemo(() => 0.6 + pseudoRandom(motionSeed + 37) * 0.9, [motionSeed]);

  const tick = useSharedValue(0);

  useEffect(() => {
    tick.value = 0;
    tick.value = withRepeat(
      withTiming(1, { duration, easing: Easing.linear }),
      -1,
      true,
    );
  }, [duration, tick]);

  const animatedStyle = useAnimatedStyle(() => {
    // One shared period — different phases only, so loop/reverse never snaps
    const t = tick.value * Math.PI * 2;
    return {
      transform: [
        { translateX: Math.sin(t + phaseX) * swayX },
        { translateY: Math.sin(t + phaseY) * swayY },
        { rotate: `${Math.sin(t + phaseRot) * swayRot}deg` },
      ],
    };
  }, [phaseX, phaseY, phaseRot, swayX, swayY, swayRot]);

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
}
