import React from "react";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { GlassView } from "expo-glass-effect";
import { colors } from "../theme/colors";
import {
  NEUTRAL_GLASS_TINT,
  NEUTRAL_GLASS_WASH,
  NEUTRAL_PLATE_COLORS,
} from "../theme/glassTokens";

type Props = {
  glassAvailable: boolean;
};

/** White / beige glass + plate depth & specular (orange rim is on GlassLensStage). */
export function NeutralGlassInterior({ glassAvailable }: Props) {
  return (
    <>
      {glassAvailable ? (
        <GlassView
          glassEffectStyle="clear"
          colorScheme="light"
          tintColor={NEUTRAL_GLASS_TINT}
          isInteractive
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <BlurView intensity={48} tint="light" style={StyleSheet.absoluteFill} />
      )}
      <LinearGradient
        colors={[...NEUTRAL_PLATE_COLORS]}
        locations={[0, 0.45, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.plate}
        pointerEvents="none"
      />
      <View style={styles.wash} pointerEvents="none" />
      <LinearGradient
        colors={[
          colors.glass.specularStart,
          colors.glass.specularMid,
          "rgba(255, 255, 255, 0)",
        ]}
        locations={[0, 0.28, 0.72]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.specular}
        pointerEvents="none"
      />
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0.45)",
          "rgba(255, 255, 255, 0.08)",
          "rgba(255, 255, 255, 0)",
        ]}
        locations={[0, 0.35, 0.65]}
        start={{ x: 0.12, y: 0 }}
        end={{ x: 0.88, y: 1 }}
        style={styles.specularSkew}
        pointerEvents="none"
      />
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.38)", "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.12 }}
        style={styles.topGloss}
        pointerEvents="none"
      />
    </>
  );
}

const styles = StyleSheet.create({
  plate: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
  },
  wash: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
    backgroundColor: NEUTRAL_GLASS_WASH,
  },
  specular: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    opacity: 0.78,
  },
  specularSkew: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    opacity: 0.55,
  },
  topGloss: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "24%",
    zIndex: 1,
  },
});
