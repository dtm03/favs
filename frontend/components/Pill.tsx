import React, { useMemo, useState } from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { GlassInterior } from './GlassInterior';
import { GlassLensStage } from './GlassLensStage';
import type { GlassTone } from '../theme/glassTokens';
import { PILL_FALLBACK_RADIUS } from '../theme/pills';
import { pillStyles } from '../styles/Pill.styles';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  tone?: GlassTone;
  /** Fixed height; omit to grow with the content (message bubbles) */
  height?: number;
  /** Defaults to a capsule — height / 2 */
  radius?: number;
  /** Soft orange drop shadow */
  elevated?: boolean;
  /** Width follows the content instead of filling the parent */
  fitContent?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

/**
 * The one pill in the app. Rim, glass and radius are always the same —
 * callers only choose height, fill tone and what goes inside.
 */
export function Pill({
  children,
  onPress,
  tone = 'neutral',
  height,
  radius,
  elevated = false,
  fitContent = false,
  style,
  contentStyle,
}: Props) {
  const [measuredRadius, setMeasuredRadius] = useState(PILL_FALLBACK_RADIUS);
  const fixedRadius = radius ?? (height != null ? height / 2 : undefined);
  const cornerRadius = fixedRadius ?? measuredRadius;

  const onLayout = (e: LayoutChangeEvent) => {
    if (fixedRadius != null) return;
    const measured = e.nativeEvent.layout.height;
    if (measured < 2) return;
    const next = measured / 2;
    setMeasuredRadius((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
  };

  const glassAvailable = useMemo(() => {
    try {
      return isGlassEffectAPIAvailable();
    } catch {
      return false;
    }
  }, []);

  const hostStyle = [
    fitContent ? pillStyles.hostFitContent : pillStyles.host,
    height != null && { height },
    style,
  ];

  const shell = (
    <GlassLensStage
      cornerRadius={cornerRadius}
      elevated={elevated}
      fillHeight={height != null}
    >
      <GlassInterior tone={tone} glassAvailable={glassAvailable} />
      <View
        style={[
          pillStyles.content,
          height != null && pillStyles.contentFill,
          contentStyle,
        ]}
        pointerEvents="box-none"
      >
        {children}
      </View>
    </GlassLensStage>
  );

  if (!onPress) {
    return (
      <View onLayout={onLayout} style={hostStyle}>
        {shell}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLayout={onLayout}
      style={({ pressed }) => [...hostStyle, pressed && pillStyles.pressed]}
    >
      {shell}
    </Pressable>
  );
}
