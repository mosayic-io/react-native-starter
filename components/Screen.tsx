import { ReactNode } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "@/lib/theme";

export type ScreenProps = {
  children: ReactNode;
  scrollable?: boolean;
  padded?: boolean;
  style?: ViewStyle;
};

/**
 * Base screen wrapper: paper-white background, safe area, and optional
 * container margin. Use `scrollable` for long content.
 */
export function Screen({
  children,
  scrollable = false,
  padded = true,
  style,
}: ScreenProps) {
  const containerStyle = [
    padded && styles.padded,
    style,
  ];

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      {scrollable ? (
        <ScrollView
          contentContainerStyle={[styles.scrollContent, containerStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.flex, containerStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  padded: {
    paddingHorizontal: spacing.containerMargin,
    paddingVertical: spacing.lg,
  },
});
