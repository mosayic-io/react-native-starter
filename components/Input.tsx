import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { colors, fonts, radius, spacing } from "@/lib/theme";
import { Text } from "./Text";

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
};

/**
 * Single-line input with a label-caps label above and a soft sand-light fill.
 * Focus shifts the border to the coral accent — no glow.
 */
export function Input({
  label,
  error,
  containerStyle,
  onFocus,
  onBlur,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={containerStyle}>
      {label ? (
        <Text variant="labelCaps" style={styles.label}>
          {label}
        </Text>
      ) : null}
      <TextInput
        placeholderTextColor={colors.onSurfaceVariant}
        {...rest}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        style={[
          styles.input,
          focused && styles.inputFocused,
          error && styles.inputError,
          style,
        ]}
      />
      {error ? (
        <Text variant="bodyMd" style={styles.error}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.surfaceContainerLow,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    borderRadius: radius.base,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontFamily: fonts.sans,
    fontSize: 16,
    color: colors.onSurface,
    minHeight: 44,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    marginTop: spacing.xs,
  },
});
