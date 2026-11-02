import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OrangeRadialBackground } from './OrangeRadialBackground';
import { colors } from '../theme/colors';
import { SCREEN_TOP_MARGIN } from '../theme/layout';

type Props = {
  children: React.ReactNode;
};

/** Cream background, orange radial glow and the safe-area top inset every screen shares. */
export function ScreenContainer({ children }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <OrangeRadialBackground />
      <View
        style={[styles.foreground, { paddingTop: insets.top + SCREEN_TOP_MARGIN }]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.cream,
    position: 'relative',
  },
  foreground: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
  },
});
