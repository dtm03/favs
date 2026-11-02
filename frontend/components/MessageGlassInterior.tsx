import React from "react";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { GlassView } from "expo-glass-effect";
import { colors } from "../theme/colors";
import {
  RECEIVED_MESSAGE_PLATE_COLORS,
  RECEIVED_MESSAGE_TINT,
  RECEIVED_MESSAGE_WASH,
  SENT_MESSAGE_PLATE_COLORS,
  SENT_MESSAGE_TINT,
  SENT_MESSAGE_WASH,
} from "../theme/glassTokens";

type Props = {
  glassAvailable: boolean;
  tone: "sent" | "received";
};

export function MessageGlassInterior({ glassAvailable, tone }: Props) {
  const isSent = tone === "sent";
  const tint = isSent ? SENT_MESSAGE_TINT : RECEIVED_MESSAGE_TINT;
  const wash = isSent ? SENT_MESSAGE_WASH : RECEIVED_MESSAGE_WASH;
  const plate = isSent ? SENT_MESSAGE_PLATE_COLORS : RECEIVED_MESSAGE_PLATE_COLORS;

  return (
    <>
      {glassAvailable ? (
        <GlassView
          glassEffectStyle="clear"
          colorScheme="light"
          tintColor={tint}
          isInteractive={false}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <BlurView
          intensity={isSent ? 36 : 44}
          tint={isSent ? "default" : "light"}
          style={StyleSheet.absoluteFill}
        />
      )}
      <LinearGradient
        colors={[...plate]}
        locations={[0, 0.48, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.plate}
        pointerEvents="none"
      />
      <View style={[styles.wash, { backgroundColor: wash }]} pointerEvents="none" />
      <LinearGradient
        colors={[
          colors.glass.specularStart,
          colors.glass.specularMid,
          "rgba(255, 255, 255, 0)",
        ]}
        locations={[0, 0.3, 0.75]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.specular, isSent && styles.specularSent]}
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
  },
  specular: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    opacity: 0.65,
  },
  specularSent: {
    opacity: 0.35,
  },
});
