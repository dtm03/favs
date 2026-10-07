import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { Profile } from "../data/mockData";
import { datingSwipeViewStyles } from "../styles/DatingSwipeView.styles";

type Props = {
  profile: Profile;
  photoIndex: number;
};

export function DatingSwipeView({ profile, photoIndex }: Props) {
  const url = profile.photoUrls[photoIndex] ?? profile.photoUrls[0];

  return (
    <View style={datingSwipeViewStyles.wrapper}>
      <View style={datingSwipeViewStyles.photoCard}>
        <Image
          source={{ uri: url }}
          style={datingSwipeViewStyles.photo}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(45,42,38,0.85)"]}
          style={datingSwipeViewStyles.overlay}
        >
          <Text style={datingSwipeViewStyles.name}>
            {profile.name}, {profile.age}
          </Text>
          <Text style={datingSwipeViewStyles.meta}>
            {profile.city} · {profile.bio}
          </Text>
        </LinearGradient>
      </View>
      <View style={datingSwipeViewStyles.dots}>
        {profile.photoUrls.map((_, i) => (
          <View
            key={profile.photoUrls[i]}
            style={[
              datingSwipeViewStyles.dot,
              i === photoIndex && datingSwipeViewStyles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}
