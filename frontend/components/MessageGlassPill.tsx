import React, { useMemo, useState } from "react";
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { isGlassEffectAPIAvailable } from "expo-glass-effect";
import { GlassLensStage } from "./GlassLensStage";
import { MessageGlassInterior } from "./MessageGlassInterior";
import { CHAT_PILL_RADIUS } from "../theme/glassTokens";

type Props = {
  children: React.ReactNode;
  tone: "sent" | "received";
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

/** Chat message bubble — same orange-rim pill as chat list rows. */
export function MessageGlassPill({ children, tone, style, contentStyle }: Props) {
  const [cornerRadius, setCornerRadius] = useState(CHAT_PILL_RADIUS);

  const onLayout = (e: LayoutChangeEvent) => {
    const h = e.nativeEvent.layout.height;
    if (h >= 2) {
      const next = h / 2;
      setCornerRadius((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
    }
  };

  const glassAvailable = useMemo(() => {
    try {
      return isGlassEffectAPIAvailable();
    } catch {
      return false;
    }
  }, []);

  return (
    <View onLayout={onLayout} style={[styles.host, style]}>
      <GlassLensStage variant="chatOrange" cornerRadii={cornerRadius} style={styles.shell}>
        <MessageGlassInterior glassAvailable={glassAvailable} tone={tone} />
        <View style={[styles.content, contentStyle]} pointerEvents="box-none">
          {children}
        </View>
      </GlassLensStage>
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    maxWidth: "82%",
  },
  shell: {
    width: "100%",
  },
  content: {
    zIndex: 2,
    position: "relative",
    width: "100%",
  },
});
