import { Text as RNText, TextProps as RNTextProps, StyleSheet } from "react-native";
import { typography } from "@/lib/theme";

type Variant = keyof typeof typography;

export type TextProps = RNTextProps & {
  variant?: Variant;
};

export function Text({ variant = "bodyMd", style, ...rest }: TextProps) {
  return <RNText {...rest} style={[styles[variant], style]} />;
}

const styles = StyleSheet.create(typography);
