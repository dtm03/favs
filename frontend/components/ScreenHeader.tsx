import React from 'react';
import { Text, View } from 'react-native';
import { screenHeaderStyles } from '../styles/ScreenHeader.styles';
import { textStyles } from '../theme/typography';

type Props = {
  title: string;
  /** Optional second line, e.g. the bio on the swipe screen */
  subtitle?: string;
  /** Single `HeaderIconButton`, placed right of the title */
  action?: React.ReactNode;
};

/**
 * The header for every screen: same inset, same title box, same colour.
 * Screens differ only in their title, optional subtitle and action.
 */
export function ScreenHeader({ title, subtitle, action }: Props) {
  return (
    <View style={screenHeaderStyles.block}>
      <View style={screenHeaderStyles.titleLine}>
        <Text
          style={[
            textStyles.screenTitle,
            action ? screenHeaderStyles.titleWithAction : null,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {action ? (
          <View style={screenHeaderStyles.actionSlot}>{action}</View>
        ) : null}
      </View>
      {subtitle ? (
        <Text style={screenHeaderStyles.subtitle} numberOfLines={2}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
