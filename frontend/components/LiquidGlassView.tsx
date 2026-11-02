import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { GlassLensStage } from './GlassLensStage';
import { NeutralGlassInterior } from './NeutralGlassInterior';
import { isGlassEffectAPIAvailable } from 'expo-glass-effect';
import type { BubbleCornerRadii } from '../theme/bubbleShapes';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  cornerRadii?: BubbleCornerRadii;
};

/** Fact-bubble glass: neutral fill, orange rim + shadow on lens stage. */
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
      <NeutralGlassInterior glassAvailable={glassAvailable} />
      <View style={[styles.content, contentStyle]} pointerEvents="box-none">
        {children}
      </View>
    </GlassLensStage>
  );
}

const styles = StyleSheet.create({
  content: {
    zIndex: 2,
    position: 'relative',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
