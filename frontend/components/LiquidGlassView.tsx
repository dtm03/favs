import React, { useMemo } from "react";
import {
  StyleProp,
  StyleSheet,
  UIManager,
  View,
  ViewStyle,
} from "react-native";
import { LiquidGlassView as RNLiquidGlassView } from "react-native-liquid-glassmorphism";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../theme/colors";

function isNativeViewImplemented(name: string): boolean {
  try {
    if (
      typeof (globalThis as any).__nativeComponentRegistry__hasComponent ===
      "function"
    ) {
      return Boolean(
        (globalThis as any).__nativeComponentRegistry__hasComponent(name),
      );
    }
  } catch {}
  try {
    if (typeof UIManager.hasViewManagerConfig === "function") {
      return Boolean(UIManager.hasViewManagerConfig(name));
    }
  } catch {}
  try {
    if (typeof UIManager.getViewManagerConfig === "function") {
      return Boolean(UIManager.getViewManagerConfig(name));
    }
  } catch {}
  return false;
}

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  shapeIndex?: number;
  intensity?: number;
  tintColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
};

/**
 * Liquid Glass View:
 * - Uses `react-native-liquid-glassmorphism` (Apple UIGlassEffect on iOS 26 / AGSL shader on Android)
 *   whenever running in a native/dev build that has `LiquidGlassmorphismView` compiled in.
 * - When running in standard Expo Go, uses the native BlurView liquid glass engine.
 * - Styled with `colors.bubbleBorder` rim by default.
 */
export function LiquidGlassView({
  children,
  style,
  contentStyle,
  intensity = 70,
  tintColor = "rgba(255, 140, 26, 0.25)",
  borderRadius = 999,
  borderColor = colors.bubbleBorder,
  borderWidth = 0.5,
}: Props) {
  const supportsNative = useMemo(
    () => isNativeViewImplemented("LiquidGlassmorphismView"),
    [],
  );

  const borderStyles = {
    borderRadius,
    borderColor,
    borderWidth,
  };

  if (supportsNative) {
    return (
      <View style={[styles.shadowWrapper, style]}>
        <RNLiquidGlassView
          variant="regular"
          intensity={intensity}
          tintColor={tintColor}
          interactive
          refraction
          borderRadius={borderRadius}
          specular
          rim
          style={[styles.glassSurface, borderStyles]}
        >
          <View style={[styles.content, contentStyle]}>{children}</View>
        </RNLiquidGlassView>
      </View>
    );
  }

  // Authentic iOS Liquid Glass engine for Expo Go:
  return (
    <View style={[styles.shadowWrapper, style]}>
      <View style={[styles.glassSurface, borderStyles]}>
        {/* Apple Native Frosted Glass Blur */}
        <BlurView intensity={38} tint="light" style={StyleSheet.absoluteFill} />

        {/* Liquid Translucent Glass Body with Warm Amber Caustic Tint */}
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.72)",
            "rgba(255, 235, 215, 0.40)",
            "rgba(255, 150, 40, 0.22)",
          ]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 0.9, y: 1 }}
          style={StyleSheet.absoluteFill}
        />

        {/* Top Specular Rim Reflection (Lichtkante / Apple Glass Gloss) */}
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.95)",
            "rgba(255, 255, 255, 0.35)",
            "transparent",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.specularGlossTop}
        />

        {/* Bottom Caustic Reflection */}
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255, 186, 8, 0.20)",
            "rgba(255, 255, 255, 0.45)",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.specularGlossBottom}
        />

        {/* Content */}
        <View style={[styles.content, contentStyle]}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 999,
    shadowColor: "#E85D04",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 4,
    backgroundColor: "transparent",
  },
  glassSurface: {
    borderRadius: 999,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: colors.bubbleBorder,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    position: "relative",
  },
  specularGlossTop: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
    height: 14,
    borderRadius: 999,
    opacity: 0.9,
  },
  specularGlossBottom: {
    position: "absolute",
    bottom: 0,
    left: 14,
    right: 14,
    height: 8,
    borderRadius: 999,
    opacity: 0.7,
  },
  content: {
    zIndex: 2,
  },
});
