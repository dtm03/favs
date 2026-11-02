import React, { useMemo, useState } from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { GlassLensStage } from './GlassLensStage';
import { NeutralGlassInterior } from './NeutralGlassInterior';
import { CHAT_PILL_RADIUS } from '../theme/glassTokens';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  /** Fixed radius; omit to use half measured height (capsule). */
  cornerRadius?: number;
};

/** Chat row glass — neutral fill, orange rim, capsule radius. */
export function LiquidGlassPill({
  children,
  onPress,
  style,
  contentStyle,
  cornerRadius: cornerRadiusProp,
}: Props) {
  const [measuredRadius, setMeasuredRadius] = useState(CHAT_PILL_RADIUS);
  const cornerRadius = cornerRadiusProp ?? measuredRadius;

  const onPillLayout = (e: LayoutChangeEvent) => {
    if (cornerRadiusProp != null) return;
    const h = e.nativeEvent.layout.height;
    if (h >= 2) {
      const next = h / 2;
      setMeasuredRadius((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
    }
  };

  const glassAvailable = useMemo(() => {
    try {
      return isGlassEffectAPIAvailable();
    } catch {
      return false;
    }
  }, []);

  const shell = (
    <GlassLensStage
      variant="chatOrange"
      cornerRadii={cornerRadius}
      style={[styles.shell, style]}
    >
      <NeutralGlassInterior glassAvailable={glassAvailable} />
      <View style={[styles.content, contentStyle]} pointerEvents="box-none">
        {children}
      </View>
    </GlassLensStage>
  );

  if (!onPress) {
    return (
      <View onLayout={onPillLayout} style={styles.measureHost}>
        {shell}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLayout={onPillLayout}
      style={({ pressed }) => [
        styles.pressHost,
        { borderRadius: cornerRadius },
        pressed && styles.pressed,
      ]}
    >
      {shell}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  measureHost: {
    width: '100%',
  },
  pressHost: {
    width: '100%',
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.985 }],
  },
  shell: {
    width: '100%',
  },
  content: {
    zIndex: 2,
    position: 'relative',
    width: '100%',
  },
});
