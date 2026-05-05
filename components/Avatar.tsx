import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { avatarPalette, colors, fonts } from "@/lib/theme";
import { Text } from "./Text";

export type AvatarProps = {
  /** Initials shown when there is no image (e.g. "JD"). */
  initials?: string;
  source?: ImageSourcePropType;
  size?: number;
  /** Pastel background index when initials are shown. */
  paletteIndex?: number;
  style?: StyleProp<ViewStyle>;
};

/** Perfectly circular avatar — geometric contrast against the rectangular layout. */
export function Avatar({
  initials,
  source,
  size = 40,
  paletteIndex = 0,
  style,
}: AvatarProps) {
  const sized = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  if (source) {
    return (
      <Image
        source={source}
        style={[sized, style as StyleProp<ImageStyle>]}
      />
    );
  }

  const bg = avatarPalette[paletteIndex % avatarPalette.length];

  return (
    <View style={[styles.fallback, sized, { backgroundColor: bg }, style]}>
      <Text style={[styles.initials, { fontSize: size * 0.4 }]}>
        {(initials ?? "").slice(0, 2).toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    fontFamily: fonts.sansSemibold,
    color: colors.onSurface,
  },
});
