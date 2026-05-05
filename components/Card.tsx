import { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors, radius, spacing } from "@/lib/theme";

export type CardProps = {
  children: ReactNode;
  active?: boolean;
  filled?: boolean;
  onPress?: PressableProps["onPress"];
  style?: ViewStyle;
};

/**
 * 1px-bordered card on the paper-white surface. Set `active` to thicken the
 * border with the primary accent. Set `filled` for a tonal-shifted background
 * (e.g. selected list item).
 */
export function Card({
  children,
  active,
  filled,
  onPress,
  style,
}: CardProps) {
  const cardStyle = [
    styles.card,
    filled && styles.filled,
    active && styles.active,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [cardStyle, pressed && styles.pressed]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    padding: spacing.md,
  },
  filled: {
    backgroundColor: colors.surfaceContainerLow,
  },
  active: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.primaryFixed,
  },
  pressed: {
    backgroundColor: colors.surfaceContainerLow,
  },
});
