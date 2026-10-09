import React from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../theme/colors";
import { BUBBLE_PLATE_COLORS } from "../theme/glassTokens";
import {
  type BubbleCornerRadii,
  cornerRadiiToStyle,
  maxCornerRadius,
} from "../theme/bubbleShapes";

/** Wider spread, lower opacity — reads as a soft shadow, not a ring */
const SOFT_SHADOW_LAYERS = [
  { spread: 52, opacity: 0.014 },
  { spread: 38, opacity: 0.021 },
  { spread: 26, opacity: 0.03 },
  { spread: 14, opacity: 0.042 },
  { spread: 6, opacity: 0.052 },
] as const;

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  /** Stadium / circle radius (typically min(width, height) / 2) */
  cornerRadii?: BubbleCornerRadii;
  variant?: "lightOrange";
};

function SoftShadowLayers({ borderRadius }: { borderRadius: number }) {
  const lift = 5;
  return (
    <>
      {SOFT_SHADOW_LAYERS.map(({ spread, opacity }) => (
        <View
          key={spread}
          pointerEvents="none"
          style={{
            position: "absolute",
            top: -spread + lift,
            left: -spread,
            right: -spread,
            bottom: -spread - lift,
            borderRadius: borderRadius + spread,
            backgroundColor: colors.orangeAlpha(opacity * 1.15),
          }}
        />
      ))}
    </>
  );
}

/**
 * Glass shell: light-orange plate + soft even fade shadow (no solid halo ring).
 */
export function GlassLensStage({
  children,
  style,
  cornerRadii = 999,
  variant = "lightOrange",
}: Props) {
  const isLightOrange = variant === "lightOrange";
  const radiusStyle = cornerRadiiToStyle(cornerRadii);
  const shadowRadius = maxCornerRadius(cornerRadii);

  return (
    <View style={[styles.host, style]}>
      <View style={styles.shadowCast}>
        {isLightOrange && Platform.OS !== "ios" ? (
          <SoftShadowLayers borderRadius={shadowRadius} />
        ) : null}
        <View style={[styles.shadowSurface, styles.frame, radiusStyle]}>
          <View
            style={[styles.clip, styles.frame, radiusStyle, styles.rimBorder]}
          >
            {isLightOrange ? (
              <LinearGradient
                colors={[...BUBBLE_PLATE_COLORS]}
                locations={[0, 0.45, 1]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.plate, radiusStyle]}
              />
            ) : null}
            {children}
          </View>
        </View>
      </View>
    </View>
  );
}

const iosBubbleShadow = Platform.select({
  ios: {
    shadowColor: colors.orange,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.38,
    shadowRadius: 26,
  },
  default: {},
});

const styles = StyleSheet.create({
  host: {
    backgroundColor: "transparent",
  },
  shadowCast: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  shadowSurface: {
    backgroundColor: "transparent",
    ...iosBubbleShadow,
  },
  frame: {
    width: "100%",
    height: "100%",
  },
  clip: {
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth * 2,
    position: "relative",
    backgroundColor: "transparent",
  },
  rimBorder: {
    borderColor: colors.orange,
  },
  plate: {
    ...StyleSheet.absoluteFill,
  },
});
