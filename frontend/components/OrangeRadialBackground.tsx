import { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '../theme/colors';

/** Matches swipe header: title `colors.orange`, hint `colors.muted`, fade to cream */
export function OrangeRadialBackground() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (width > 0 && height > 0) {
      setSize((prev) =>
        prev.width === width && prev.height === height ? prev : { width, height },
      );
    }
  };

  const cx = size.width * 0.5;
  const cy = size.height * 0.45;
  const radius = Math.max(size.width, size.height) * 0.65;

  return (
    <View style={styles.layer} onLayout={onLayout} pointerEvents="none">
      {size.width > 0 && size.height > 0 ? (
        <Svg width={size.width} height={size.height}>
          <Defs>
            <RadialGradient
              id="favsOrangeRadial"
              cx={cx}
              cy={cy}
              rx={radius}
              ry={radius}
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0%" stopColor={colors.orange} stopOpacity={0.36} />
              <Stop offset="38%" stopColor={colors.orange} stopOpacity={0.14} />
              <Stop offset="58%" stopColor={colors.muted} stopOpacity={0.1} />
              <Stop offset="82%" stopColor={colors.cream} stopOpacity={0.04} />
              <Stop offset="100%" stopColor={colors.cream} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <Rect x={0} y={0} width={size.width} height={size.height} fill="url(#favsOrangeRadial)" />
        </Svg>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFill,
  },
});
