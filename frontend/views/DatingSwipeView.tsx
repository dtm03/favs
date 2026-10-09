import { useState } from 'react';
import { ActivityIndicator, Image, Pressable, View } from 'react-native';
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
        {loading && (
          <View style={datingSwipeViewStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.orange} />
          </View>
        )}

        <Image
          source={{ uri: currentUrl }}
          style={datingSwipeViewStyles.photo}
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />

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
      </View>
    </View>
  );
}
