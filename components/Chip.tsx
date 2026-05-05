import { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { avatarPalette, colors, fonts, radius, spacing } from "@/lib/theme";
import { Text } from "./Text";

export type ChipProps = {
  label: string;
  /** Index into avatarPalette, or pass a custom color via `color`. */
  paletteIndex?: number;
  color?: string;
  selected?: boolean;
  onPress?: PressableProps["onPress"];
  leftIcon?: ReactNode;
  style?: ViewStyle;
};

/**
 * Pastel chip for categories or people. Text uses the primary ink color so the
 * pastel reads as a background, not a button.
 */
export function Chip({
  label,
  paletteIndex = 0,
  color,
  selected,
  onPress,
  leftIcon,
  style,
}: ChipProps) {
  const bg = color ?? avatarPalette[paletteIndex % avatarPalette.length];

  const content = (
    <View style={styles.content}>
      {leftIcon}
      <Text style={styles.label}>{label}</Text>
    </View>
  );

  const chipStyle = [
    styles.chip,
    { backgroundColor: bg },
    selected && styles.selected,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [chipStyle, pressed && styles.pressed]}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={chipStyle}>{content}</View>;
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    alignSelf: "flex-start",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs + 2,
  },
  label: {
    fontFamily: fonts.sansMedium,
    fontSize: 13,
    lineHeight: 18,
    color: colors.onSurface,
  },
  selected: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.85,
  },
});
