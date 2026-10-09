import { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Snackbar } from "react-native-paper";
import { profileQueue } from "../data/mockData";
import { swipeScreenStyles } from "../styles/SwipeScreen.styles";
import { FactsSwipeView } from "../views/FactsSwipeView";
import { DatingSwipeView } from "../views/DatingSwipeView";

type SwipeStage = "favs" | "photos";

type Props = {
  onOpenProfile: () => void;
};

const FAV_EXIT_MS = 7600;
const PHOTO_RISE_MS = 1200;

export function SwipeScreen({ onOpenProfile }: Props) {
  const [stage, setStage] = useState<SwipeStage>("favs");
  const [isRevealing, setIsRevealing] = useState(false);
  const [photosReady, setPhotosReady] = useState(false);
  const [snack, setSnack] = useState<string | null>(null);
  const [profileIndex, setProfileIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const favExit = useSharedValue(0);
  const photoRise = useSharedValue(0);

  const currentProfile = profileQueue[profileIndex] ?? profileQueue[0];
  const totalPhotos = currentProfile.photoUrls.length || 1;

  const resetCard = useCallback(() => {
    setStage("favs");
    setIsRevealing(false);
    setPhotosReady(false);
    setPhotoIndex(0);
    favExit.value = 0;
    photoRise.value = 0;
  }, [favExit, photoRise]);

  const moveToNextProfile = useCallback(() => {
    setProfileIndex((prev) => (prev + 1) % profileQueue.length);
    resetCard();
  }, [resetCard]);

  const finishReveal = useCallback(() => {
    setStage("photos");
    setIsRevealing(false);
    setPhotosReady(false);
    // Keep exit at 1 so a stray fav mount never pops bubbles back in
    favExit.value = 1;
    photoRise.value = 1;
  }, [favExit, photoRise]);

  const runPhotoRise = useCallback(() => {
    photoRise.value = 0;
    photoRise.value = withTiming(
      1,
      {
        duration: PHOTO_RISE_MS,
        easing: Easing.out(Easing.back(1.12)),
      },
      (finished) => {
        if (finished) {
          runOnJS(finishReveal)();
        }
      },
    );
  }, [finishReveal, photoRise]);

  const onFavExitComplete = useCallback(() => {
    setPhotosReady(true);
    runPhotoRise();
  }, [runPhotoRise]);

  const revealPhotos = useCallback(() => {
    if (isRevealing || stage !== "favs") return;

    setIsRevealing(true);
    setPhotosReady(false);
    favExit.value = 0;
    photoRise.value = 0;

    favExit.value = withTiming(
      1,
      {
        duration: FAV_EXIT_MS,
        easing: Easing.inOut(Easing.cubic),
      },
      (finished) => {
        if (finished) {
          runOnJS(onFavExitComplete)();
        }
      },
    );
  }, [favExit, isRevealing, onFavExitComplete, photoRise, stage]);

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
            if (isRevealing) return;
            if (dy > 70) {
              runOnJS(revealPhotos)();
            } else if (dy < -70) {
              runOnJS(passProfile)();
            }
            return;
          }

          if (stage === "photos") {
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
    [
      handleNextPhoto,
      handlePrevPhoto,
      isRevealing,
      likeProfile,
      passProfile,
      revealPhotos,
      stage,
    ],
  );

  const photoEnterStyle = useAnimatedStyle(() => ({
    opacity: photoRise.value,
    transform: [
      { translateY: (1 - photoRise.value) * 128 },
      { scale: 0.76 + photoRise.value * 0.24 },
    ],
  }));

  const showFavs = stage === "favs" && (!isRevealing || !photosReady);
  const showPhotos = stage === "photos" || isRevealing;

  const titleText = `${currentProfile.name}, ${currentProfile.age}`;
  const hintText = `${currentProfile.bio}`;

  return (
    <View style={swipeScreenStyles.container}>
      <View style={swipeScreenStyles.headerRow}>
        <View style={swipeScreenStyles.headerTextContainer}>
          <Text style={swipeScreenStyles.title} numberOfLines={1}>
            {titleText}
          </Text>
          <Text style={swipeScreenStyles.hint} numberOfLines={2}>
            {hintText}
          </Text>
        </View>
      </View>

      <GestureDetector gesture={pan}>
        <View style={swipeScreenStyles.cardArea}>
          {showPhotos ? (
            <Animated.View
              style={[
                stageStyles.layer,
                stageStyles.photoLayer,
                photoEnterStyle,
              ]}
              pointerEvents={
                photosReady || stage === "photos" ? "auto" : "none"
              }
            >
              <DatingSwipeView
                profile={currentProfile}
                photoIndex={photoIndex}
                onNextPhoto={handleNextPhoto}
                onPrevPhoto={handlePrevPhoto}
                onSelectPhoto={handleSelectPhoto}
              />
            </Animated.View>
          ) : null}
          {showFavs ? (
            <View
              style={[stageStyles.layer, stageStyles.favsLayer]}
              pointerEvents={isRevealing ? "none" : "auto"}
            >
              <FactsSwipeView
                profile={currentProfile}
                exitProgress={isRevealing ? favExit : undefined}
              />
            </View>
          ) : null}
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

const stageStyles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
  },
  photoLayer: {
    zIndex: 1,
  },
  favsLayer: {
    zIndex: 2,
  },
});
