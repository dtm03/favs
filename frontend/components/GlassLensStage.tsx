import React from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../theme/colors";
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
  variant?: "lightOrange" | "liquidClear" | "chatOrange";
};

function SoftShadowLayers({
  borderRadius,
  tint,
}: {
  borderRadius: number;
  tint: "orange" | "neutral";
}) {
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
            backgroundColor:
              tint === "orange"
                ? colors.orangeAlpha(opacity * 1.15)
                : `rgba(80, 72, 66, ${opacity * 0.9})`,
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
  const isLiquidClear = variant === "liquidClear";
  const isLightOrange = variant === "lightOrange";
  const isChatOrange = variant === "chatOrange";
  const radiusStyle = cornerRadiiToStyle(cornerRadii);
  const shadowRadius = maxCornerRadius(cornerRadii);
  const hasOrangeRim = isLightOrange || isChatOrange;
  const sizeToContent = isLiquidClear || isChatOrange;

  return (
    <View style={[styles.host, style]}>
      <View style={[styles.shadowCast, sizeToContent && styles.shadowCastContent]}>
        {hasOrangeRim && Platform.OS !== "ios" ? (
          <SoftShadowLayers borderRadius={shadowRadius} tint="orange" />
        ) : null}
        <View
          style={[
            styles.shadowSurface,
            sizeToContent ? styles.frameContent : styles.frame,
            radiusStyle,
            hasOrangeRim ? styles.orangeShadow : styles.liquidClearShadow,
          ]}
        >
          <View
            style={[
              sizeToContent ? styles.frameContent : styles.frame,
              radiusStyle,
              hasOrangeRim ? styles.clip : styles.clipBorderless,
              hasOrangeRim && styles.rimBorder,
            ]}
          >
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

const iosLiquidClearShadow = Platform.select({
  ios: {
    shadowColor: colors.muted,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
  shadowCastContent: {
    height: undefined,
  },
  frameContent: {
    width: "100%",
  },
  shadowSurface: {
    backgroundColor: "transparent",
  },
  orangeShadow: {
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
  clipBorderless: {
    overflow: "hidden",
    borderWidth: 0,
    position: "relative",
    backgroundColor: "transparent",
  },
  rimBorder: {
    borderColor: colors.orange,
  },
  liquidClearShadow: {
    ...iosLiquidClearShadow,
  },
});
