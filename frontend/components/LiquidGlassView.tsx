import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import { GlassView, isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { GlassLensStage } from './GlassLensStage';
import { BUBBLE_GLASS_WASH, ORANGE_GLASS_TINT } from '../theme/glassTokens';
import type { BubbleCornerRadii } from '../theme/bubbleShapes';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  cornerRadii?: BubbleCornerRadii;
};

/**
 * Fact-bubble glass: expo-glass-effect native material inside GlassLensStage (light orange).
 */
export function LiquidGlassView({
  children,
  style,
  contentStyle,
  cornerRadii = 999,
}: Props) {
  const glassAvailable = useMemo(() => {
    try {
      return isGlassEffectAPIAvailable();
    } catch {
      return false;
    }
  }, []);

  return (
    <GlassLensStage variant="lightOrange" style={style} cornerRadii={cornerRadii}>
      {glassAvailable ? (
        <GlassView
          glassEffectStyle="clear"
          colorScheme="light"
          tintColor={ORANGE_GLASS_TINT}
          isInteractive
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <BlurView intensity={32} tint="default" style={StyleSheet.absoluteFill} />
      )}
      <View style={styles.orangeWash} pointerEvents="none" />
      <LinearGradient
        colors={[
          colors.glass.specularStart,
          colors.glass.specularMid,
          'rgba(255, 255, 255, 0)',
        ]}
        locations={[0, 0.28, 0.72]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.specular}
        pointerEvents="none"
      />
      <View style={[styles.content, contentStyle]} pointerEvents="box-none">
        {children}
      </View>
    </GlassLensStage>
  );
}

const styles = StyleSheet.create({
  specular: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    opacity: 0.72,
  },
  orangeWash: {
    ...StyleSheet.absoluteFill,
    backgroundColor: BUBBLE_GLASS_WASH,
  },
  content: {
    zIndex: 2,
    position: 'relative',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
