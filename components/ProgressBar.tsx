import { StyleSheet, View, ViewStyle } from "react-native";
import { colors, radius } from "@/lib/theme";

export type ProgressBarProps = {
  /** 0–1. Values outside the range are clamped. */
  progress: number;
  height?: number;
  trackColor?: string;
  fillColor?: string;
  style?: ViewStyle;
};

/** Thick sand-light track with a coral fill. Edges slightly rounded. */
export function ProgressBar({
  progress,
  height = 8,
  trackColor = colors.surfaceContainerHighest,
  fillColor = colors.primary,
  style,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, progress));

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ now: Math.round(clamped * 100), min: 0, max: 100 }}
      style={[
        styles.track,
        { height, backgroundColor: trackColor, borderRadius: height / 2 },
        style,
      ]}
    >
      <View
        style={[
          styles.fill,
          {
            width: `${clamped * 100}%`,
            backgroundColor: fillColor,
            borderRadius: height / 2,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    overflow: "hidden",
    borderRadius: radius.full,
  },
  fill: {
    height: "100%",
  },
});
