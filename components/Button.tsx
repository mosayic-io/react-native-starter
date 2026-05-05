import { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors, fonts, radius, spacing } from "@/lib/theme";
import { Text } from "./Text";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

export type ButtonProps = Omit<PressableProps, "children" | "style"> & {
  label: string;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: ViewStyle;
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  loading,
  leftIcon,
  rightIcon,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!isDisabled, busy: !!loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        sizeStyles[size],
        variantStyles[variant],
        pressed && !isDisabled && pressedStyles[variant],
        isDisabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={labelColor[variant]} />
      ) : (
        <View style={styles.content}>
          {leftIcon}
          <Text style={[styles.label, { color: labelColor[variant] }]}>
            {label}
          </Text>
          {rightIcon}
        </View>
      )}
    </Pressable>
  );
}

const labelColor: Record<Variant, string> = {
  primary: colors.onPrimary,
  secondary: colors.onSurface,
  ghost: colors.primary,
};

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  label: {
    fontFamily: fonts.sansMedium,
    fontSize: 16,
    lineHeight: 20,
  },
  disabled: {
    opacity: 0.5,
  },
});

const sizeStyles: Record<Size, ViewStyle> = StyleSheet.create({
  md: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  lg: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
});

const variantStyles: Record<Variant, ViewStyle> = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  ghost: {
    backgroundColor: "transparent",
  },
});

const pressedStyles: Record<Variant, ViewStyle> = StyleSheet.create({
  primary: {
    backgroundColor: colors.onPrimaryContainer,
  },
  secondary: {
    backgroundColor: colors.surfaceContainerLow,
  },
  ghost: {
    backgroundColor: colors.surfaceContainerLow,
  },
});
