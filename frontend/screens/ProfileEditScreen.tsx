import { ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Chip, TextInput } from 'react-native-paper';
import { sampleProfile } from '../data/mockData';
import type { RootStackParamList } from '../navigation/types';
import { profileEditScreenStyles } from '../styles/ProfileEditScreen.styles';
import { colors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileEdit'>;

export function ProfileEditScreen({ navigation }: Props) {
  return (
    <ScrollView style={profileEditScreenStyles.container} contentContainerStyle={profileEditScreenStyles.scroll}>
      <TextInput
        label="Name"
        mode="outlined"
        defaultValue="Du"
        outlineColor={colors.creamDark}
        activeOutlineColor={colors.orange}
      />
      <TextInput
        label="Stadt"
        mode="outlined"
        defaultValue="Berlin"
        style={{ marginTop: 12 }}
        outlineColor={colors.creamDark}
        activeOutlineColor={colors.orange}
      />
      <TextInput
        label="Bio"
        mode="outlined"
        multiline
        numberOfLines={3}
        defaultValue="Erzähl kurz, wer du bist."
        style={{ marginTop: 12 }}
        outlineColor={colors.creamDark}
        activeOutlineColor={colors.orange}
      />

      <Text style={profileEditScreenStyles.sectionTitle}>Deine Favs</Text>
      <View style={profileEditScreenStyles.chipRow}>
        {sampleProfile.favs.map((fav) => (
          <Chip key={fav.category} mode="outlined" icon="heart">
            {fav.category}: {fav.value}
          </Chip>
        ))}
      </View>

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 24 }}>
        Speichern
      </Button>
    </ScrollView>
  );
}
