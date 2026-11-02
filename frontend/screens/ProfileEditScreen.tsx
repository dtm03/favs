import { useMemo, useState } from 'react';
import { LayoutChangeEvent, ScrollView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HeaderIconButton } from '../components/HeaderIconButton';
import { ProfileFavPillRow } from '../components/ProfileFavPillRow';
import { ProfileFieldPill } from '../components/ProfileFieldPill';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenHeader } from '../components/ScreenHeader';
import { sampleProfile } from '../data/mockData';
import type { RootStackParamList } from '../navigation/types';
import { profileEditScreenStyles } from '../styles/ProfileEditScreen.styles';
import { PILL_GAP, PILL_GRID_COLUMNS } from '../theme/pills';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileEdit'>;

type ProfileField = {
  emoji: string;
  label: string;
  value: string;
  valueLines?: number;
};

const PROFILE_FIELDS: ProfileField[] = [
  { emoji: '👤', label: 'Name', value: sampleProfile.name },
  { emoji: '📍', label: 'Stadt', value: sampleProfile.city },
  { emoji: '💬', label: 'Bio', value: sampleProfile.bio, valueLines: 3 },
];

export function ProfileEditScreen({ navigation }: Props) {
  const [gridWidth, setGridWidth] = useState(0);

  const cellWidth = useMemo(() => {
    if (gridWidth <= 0) return 0;
    const gaps = PILL_GAP * (PILL_GRID_COLUMNS - 1);
    return (gridWidth - gaps) / PILL_GRID_COLUMNS;
  }, [gridWidth]);

  const onFavGridLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    if (width <= 0) return;
    setGridWidth((prev) => (Math.abs(prev - width) < 1 ? prev : width));
  };

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Profil"
        action={
          <HeaderIconButton
            icon="chevron-left"
            onPress={() => navigation.goBack()}
            accessibilityLabel="Zurück"
          />
        }
      />

      <ScrollView
        style={profileEditScreenStyles.scroll}
        contentContainerStyle={profileEditScreenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {PROFILE_FIELDS.map((field) => (
          <ProfileFieldPill
            key={field.label}
            emoji={field.emoji}
            label={field.label}
            value={field.value}
            valueLines={field.valueLines}
          />
        ))}

        <View style={profileEditScreenStyles.favGrid} onLayout={onFavGridLayout}>
          {cellWidth > 0
            ? sampleProfile.favs.map((fav) => (
                <ProfileFavPillRow
                  key={fav.category}
                  item={fav}
                  width={cellWidth}
                />
              ))
            : null}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
