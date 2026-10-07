import { useCallback, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { Snackbar } from "react-native-paper";
import { PackRevealOverlay } from "../components/PackRevealOverlay";
import { profileQueue } from "../data/mockData";
import { swipeScreenStyles } from "../styles/SwipeScreen.styles";
import { FactsSwipeView } from "../views/FactsSwipeView";
import { DatingSwipeView } from "../views/DatingSwipeView";

type SwipeStage = "favs" | "photos";

export function SwipeScreen() {
  const [stage, setStage] = useState<SwipeStage>("favs");
  const [showReveal, setShowReveal] = useState(false);
  const [snack, setSnack] = useState<string | null>(null);
  const [profileIndex, setProfileIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const currentProfile = profileQueue[profileIndex] ?? profileQueue[0];

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

  const revealPhotos = useCallback(() => setShowReveal(true), []);

  const changePhoto = useCallback(
    (direction: number) => {
      setPhotoIndex((prev) => {
        const total = currentProfile.photoUrls.length || 1;
        return (prev + direction + total) % total;
      });
    },
    [currentProfile.photoUrls.length],
  );

  const likeProfile = useCallback(() => {
    setSnack("Like! ❤️");
    setTimeout(() => {
      moveToNextProfile();
    }, 900);
  }, [moveToNextProfile]);

  const passProfile = useCallback(() => {
    setSnack("Weiter zum nächsten Profil");
    setTimeout(() => {
      moveToNextProfile();
    }, 900);
  }, [moveToNextProfile]);

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .activeOffsetX([-20, 20])
        .activeOffsetY([-20, 20])
        .onEnd((e) => {
          const dx = e.translationX;
          const dy = e.translationY;
          const current = stage;

          if (current === "favs") {
            if (dy > 80) {
              runOnJS(revealPhotos)();
            } else if (dy < -80) {
              runOnJS(passProfile)();
            }
            return;
          }

          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            const delta = dx > 0 ? -1 : 1;
            runOnJS(changePhoto)(delta);
            return;
          }

          if (dy > 80) {
            runOnJS(likeProfile)();
          } else if (dy < -80) {
            runOnJS(passProfile)();
          }
        }),
    [changePhoto, likeProfile, passProfile, revealPhotos, stage],
  );

  return (
    <View style={swipeScreenStyles.container}>
      {/* Title with Name and Age */}
      <Text style={swipeScreenStyles.title}>
        {currentProfile.name}, {currentProfile.age}
      </Text>

      {/* Subtitle / Hint with Bio */}
      <Text style={swipeScreenStyles.hint}>{currentProfile.bio}</Text>

      <GestureDetector gesture={pan}>
        <View style={swipeScreenStyles.cardArea}>
          {stage === "favs" ? (
            <FactsSwipeView profile={currentProfile} />
          ) : (
            <DatingSwipeView profile={currentProfile} photoIndex={photoIndex} />
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
