import { useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { Profile } from '../data/mockData';
import { datingSwipeViewStyles } from '../styles/DatingSwipeView.styles';
import { colors } from '../theme/colors';

type Props = {
  profile: Profile;
  photoIndex: number;
  onNextPhoto: () => void;
  onPrevPhoto: () => void;
  onSelectPhoto: (index: number) => void;
};

export function DatingSwipeView({
  profile,
  photoIndex,
  onNextPhoto,
  onPrevPhoto,
  onSelectPhoto,
}: Props) {
  const [loading, setLoading] = useState(false);
  const photos = profile.photoUrls;
  const safeIndex = Math.max(0, Math.min(photos.length - 1, photoIndex));
  const currentUrl = photos[safeIndex] ?? photos[0];

  return (
    <View style={datingSwipeViewStyles.wrapper}>
      <View style={datingSwipeViewStyles.photoCard}>
        {/* Story progress indicators at the top */}
        <View style={datingSwipeViewStyles.storyBars} pointerEvents="box-none">
          {photos.map((_, i) => (
            <Pressable
              key={`bar-${i}`}
              style={[
                datingSwipeViewStyles.storyBar,
                i === safeIndex && datingSwipeViewStyles.storyBarActive,
              ]}
              onPress={() => onSelectPhoto(i)}
            />
          ))}
        </View>

        {/* Loading Spinner */}
        {loading && (
          <View style={datingSwipeViewStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.orange} />
          </View>
        )}

        {/* Profile Photo */}
        <Image
          source={{ uri: currentUrl }}
          style={datingSwipeViewStyles.photo}
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />

        {/* Touch zones for left / right navigation */}
        <View style={datingSwipeViewStyles.tapZoneContainer}>
          <Pressable
            style={datingSwipeViewStyles.tapLeft}
            onPress={onPrevPhoto}
            accessibilityRole="button"
            accessibilityLabel="Vorheriges Foto"
          />
          <Pressable
            style={datingSwipeViewStyles.tapRight}
            onPress={onNextPhoto}
            accessibilityRole="button"
            accessibilityLabel="Nächstes Foto"
          />
        </View>

        {/* Info Gradient Overlay at Bottom */}
        <LinearGradient
          colors={['transparent', 'rgba(30, 27, 24, 0.88)']}
          style={datingSwipeViewStyles.overlay}
          pointerEvents="none"
        >
          <Text style={datingSwipeViewStyles.name}>
            {profile.name}, {profile.age}
          </Text>
          <Text style={datingSwipeViewStyles.meta}>
            {profile.city} · {profile.bio}
          </Text>
          <Text style={datingSwipeViewStyles.photoHint}>
            Foto {safeIndex + 1} von {photos.length} · Tippe zum Wechseln
          </Text>
        </LinearGradient>
      </View>

      {/* Clickable Dots beneath the photo */}
      <View style={datingSwipeViewStyles.dots}>
        {photos.map((_, i) => (
          <Pressable
            key={`dot-${i}`}
            onPress={() => onSelectPhoto(i)}
            style={datingSwipeViewStyles.dotPressable}
            hitSlop={8}
          >
            <View
              style={[
                datingSwipeViewStyles.dot,
                i === safeIndex && datingSwipeViewStyles.dotActive,
              ]}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
