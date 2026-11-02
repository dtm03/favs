import React from 'react';
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

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
  cornerRadius: number;
  /** Soft orange drop shadow — list rows and fav bubbles */
  elevated?: boolean;
  /** Host has a fixed height; fill it instead of growing with the content */
  fillHeight?: boolean;
  style?: StyleProp<ViewStyle>;
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
            position: 'absolute',
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

/** Pill shell: orange rim, clipping, and the optional soft outer shadow. */
export function GlassLensStage({
  children,
  cornerRadius,
  elevated = false,
  fillHeight = false,
  style,
}: Props) {
  const fill = fillHeight ? styles.fillHeight : null;

  return (
    <View style={[styles.host, fill, style]}>
      <View style={[styles.shadowCast, fill]}>
        {elevated && Platform.OS !== 'ios' ? (
          <SoftShadowLayers borderRadius={cornerRadius} />
        ) : null}
        <View
          style={[
            styles.frame,
            fill,
            { borderRadius: cornerRadius },
            elevated && styles.elevated,
          ]}
        >
          <View
            style={[
              styles.frame,
              fill,
              styles.rim,
              { borderRadius: cornerRadius },
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    </View>
  );
}

const iosShadow = Platform.select({
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
    backgroundColor: 'transparent',
  },
  shadowCast: {
    position: 'relative',
    width: '100%',
  },
  frame: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  fillHeight: {
    height: '100%',
  },
  elevated: {
    ...iosShadow,
  },
  rim: {
    overflow: 'hidden',
    position: 'relative',
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: colors.orange,
  },
});
