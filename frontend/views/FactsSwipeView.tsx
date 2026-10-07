import { Text, View } from 'react-native';
import { FactBubble } from '../components/FactBubble';
import type { Profile } from '../data/mockData';
import { factsSwipeViewStyles } from '../styles/FactsSwipeView.styles';

type Props = {
  profile: Profile;
};

export function FactsSwipeView({ profile }: Props) {
  return (
    <View style={factsSwipeViewStyles.wrapper}>
      <View style={factsSwipeViewStyles.nameTag}>
        <Text style={factsSwipeViewStyles.nameText}>
          {profile.name}, {profile.age}
        </Text>
      </View>
      <View style={factsSwipeViewStyles.bubbleGrid}>
        {profile.favs.map((fav) => (
          <FactBubble key={fav.category} item={fav} />
        ))}
      </View>
    </View>
  );
}
