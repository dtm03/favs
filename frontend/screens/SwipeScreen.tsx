import { useCallback, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { Snackbar } from "react-native-paper";
import { PackRevealOverlay } from "../components/PackRevealOverlay";
import { ProfileHeaderButton } from "../components/ProfileHeaderButton";
import { profileQueue } from "../data/mockData";
import { swipeScreenStyles } from "../styles/SwipeScreen.styles";
import { FactsSwipeView } from "../views/FactsSwipeView";
import { DatingSwipeView } from "../views/DatingSwipeView";

type SwipeStage = "favs" | "photos";

type Props = {
  onOpenProfile: () => void;
};

export function SwipeScreen({ onOpenProfile }: Props) {
  const [stage, setStage] = useState<SwipeStage>("favs");
  const [showReveal, setShowReveal] = useState(false);
  const [snack, setSnack] = useState<string | null>(null);
  const [profileIndex, setProfileIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const currentProfile = profileQueue[profileIndex] ?? profileQueue[0];
  const totalPhotos = currentProfile.photoUrls.length || 1;

  const resetCard = useCallback(() => {
    setStage("favs");
    setShowReveal(false);
    setPhotoIndex(0);
  }, []);

  const moveToNextProfile = useCallback(() => {
    setProfileIndex((prev) => (prev + 1) % profileQueue.length);
    resetCard();
  }, [resetCard]);

  const onRevealFinish = useCallback(() => {
    setShowReveal(false);
    setStage("photos");
  }, []);

  const revealPhotos = useCallback(() => {
    setShowReveal(true);
  }, []);

  const handleNextPhoto = useCallback(() => {
    setPhotoIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const handlePrevPhoto = useCallback(() => {
    setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  const handleSelectPhoto = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalPhotos) {
        setPhotoIndex(index);
      }
    },
    [totalPhotos],
  );

  const likeProfile = useCallback(() => {
    setSnack(`Like für ${currentProfile.name}! ❤️`);
    setTimeout(() => {
      moveToNextProfile();
    }, 900);
  }, [currentProfile.name, moveToNextProfile]);

  const passProfile = useCallback(() => {
    setSnack("Weiter zum nächsten Profil");
    setTimeout(() => {
      moveToNextProfile();
    }, 900);
  }, [moveToNextProfile]);

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .activeOffsetY([-25, 25])
        .onEnd((e) => {
          const dx = e.translationX;
          const dy = e.translationY;

          if (stage === "favs") {
            if (dy > 70) {
              runOnJS(revealPhotos)();
            } else if (dy < -70) {
              runOnJS(passProfile)();
            }
            return;
          }

          if (stage === "photos") {
            // Horizontal swipe can also navigate photos
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
              if (dx < 0) {
                runOnJS(handleNextPhoto)();
              } else {
                runOnJS(handlePrevPhoto)();
              }
              return;
            }

            if (dy > 70) {
              runOnJS(likeProfile)();
            } else if (dy < -70) {
              runOnJS(passProfile)();
            }
          }
        }),
    [handleNextPhoto, handlePrevPhoto, likeProfile, passProfile, revealPhotos, stage],
  );

  const titleText = `${currentProfile.name}, ${currentProfile.age}`;
  const hintText = `${currentProfile.bio}`;

  return (
    <View style={swipeScreenStyles.container}>
      {/* Header Info Row: Title & Bio on left, Profile button on right at same height */}
      <View style={swipeScreenStyles.headerRow}>
        <View style={swipeScreenStyles.headerTextContainer}>
          <Text style={swipeScreenStyles.title} numberOfLines={1}>
            {titleText}
          </Text>
          <Text style={swipeScreenStyles.hint} numberOfLines={2}>
            {hintText}
          </Text>
        </View>
        <ProfileHeaderButton onPress={onOpenProfile} />
      </View>

      <GestureDetector gesture={pan}>
        <View style={swipeScreenStyles.cardArea}>
          {stage === "favs" ? (
            <FactsSwipeView profile={currentProfile} />
          ) : (
            <DatingSwipeView
              profile={currentProfile}
              photoIndex={photoIndex}
              onNextPhoto={handleNextPhoto}
              onPrevPhoto={handlePrevPhoto}
              onSelectPhoto={handleSelectPhoto}
            />
          )}
          <PackRevealOverlay visible={showReveal} onFinish={onRevealFinish} />
        </View>
      </GestureDetector>

      <Snackbar
        visible={!!snack}
        onDismiss={() => setSnack(null)}
        duration={1500}
      >
        {snack}
      </Snackbar>
    </View>
  );
}
