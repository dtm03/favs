import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { GlassView } from 'expo-glass-effect';
import { colors } from '../theme/colors';
import { GLASS_TONES, type GlassTone } from '../theme/glassTokens';

type Props = {
  tone: GlassTone;
  /** Native Liquid Glass available (iOS) — otherwise a blur stands in */
  glassAvailable: boolean;
};

/** Fill of a pill: blur/glass, depth plate and specular. The rim lives on GlassLensStage. */
export function GlassInterior({ tone, glassAvailable }: Props) {
  const tokens = GLASS_TONES[tone];

  return (
    <>
      {glassAvailable ? (
        <GlassView
          glassEffectStyle="clear"
          colorScheme="light"
          tintColor={tokens.tint}
          isInteractive={tone === 'neutral'}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <BlurView
          intensity={tokens.blurIntensity}
          tint={tokens.blurTint}
          style={StyleSheet.absoluteFill}
        />
      )}
      <LinearGradient
        colors={[...tokens.plate]}
        locations={[0, 0.46, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.plate}
        pointerEvents="none"
      />
      <View
        style={[styles.wash, { backgroundColor: tokens.wash }]}
        pointerEvents="none"
      />
      <LinearGradient
        colors={[
          colors.glass.specularStart,
          colors.glass.specularMid,
          'rgba(255, 255, 255, 0)',
        ]}
        locations={[0, 0.29, 0.74]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.layer, { opacity: tokens.specularOpacity }]}
        pointerEvents="none"
      />
      {tokens.glossOpacity > 0 ? (
        <>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.45)',
              'rgba(255, 255, 255, 0.08)',
              'rgba(255, 255, 255, 0)',
            ]}
            locations={[0, 0.35, 0.65]}
            start={{ x: 0.12, y: 0 }}
            end={{ x: 0.88, y: 1 }}
            style={[styles.layer, { opacity: tokens.glossOpacity }]}
            pointerEvents="none"
          />
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.38)', 'transparent']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.12 }}
            style={styles.topGloss}
            pointerEvents="none"
          />
        </>
      ) : null}
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
  layer: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
  },
  topGloss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '24%',
    zIndex: 1,
  },
});
