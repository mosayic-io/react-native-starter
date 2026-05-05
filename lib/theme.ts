import { TextStyle } from "react-native";

/**
 * Warm Minimalism design system.
 *
 * Anchored by a "Paper White" base with a Coral accent. Depth is conveyed
 * through tonal layering (subtle surface shifts) and 1px borders rather than
 * drop shadows. Editorial serif headings (Instrument Serif) pair with a
 * precise UI sans (Inter) for labels and body text.
 */

export const colors = {
  // Surfaces — paper-white base, tonal layering for depth
  background: "#fff8f6",
  surface: "#fff8f6",
  surfaceDim: "#e7d6d2",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#fff1ed",
  surfaceContainer: "#fceae6",
  surfaceContainerHigh: "#f6e4e0",
  surfaceContainerHighest: "#f0dfdb",

  // Text / ink
  onSurface: "#221a17",
  onSurfaceVariant: "#55433e",
  inverseOnSurface: "#ffede9",

  // Lines
  outline: "#88726d",
  outlineVariant: "#dbc1ba",

  // Brand — coral
  primary: "#98462e",
  onPrimary: "#ffffff",
  primaryContainer: "#f28c6f",
  onPrimaryContainer: "#6c2510",
  primaryFixed: "#ffdbd1",
  primaryFixedDim: "#ffb5a0",

  // Secondary — warm taupe
  secondary: "#615e57",
  onSecondary: "#ffffff",
  secondaryContainer: "#e7e2d9",
  onSecondaryContainer: "#67645d",

  // Tertiary — teal accent (used for chips / highlights)
  tertiary: "#006b5e",
  onTertiary: "#ffffff",
  tertiaryContainer: "#3fbaa7",
  tertiaryFixed: "#82f6e1",

  // Status
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  onErrorContainer: "#93000a",
} as const;

/**
 * Avatar pastels — earthy, "modern-retro" tones designed to look harmonious
 * when shown together. Use a darkened ink on top for legibility.
 */
export const avatarPalette = [
  "#f6dcd2", // blush
  "#cce8df", // mint
  "#f0dfdb", // sand
  "#dfe6d2", // sage
  "#e8d8e8", // lilac
  "#fae0c4", // peach
] as const;

export const fonts = {
  serif: "InstrumentSerif_400Regular",
  serifItalic: "InstrumentSerif_400Regular_Italic",
  sans: "Inter_400Regular",
  sansMedium: "Inter_500Medium",
  sansSemibold: "Inter_600SemiBold",
} as const;

export const typography = {
  h1: {
    fontFamily: fonts.serif,
    fontSize: 48,
    lineHeight: 53,
    letterSpacing: -0.96,
    color: colors.onSurface,
  },
  h2: {
    fontFamily: fonts.serif,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.32,
    color: colors.onSurface,
  },
  h3: {
    fontFamily: fonts.serif,
    fontSize: 24,
    lineHeight: 31,
    color: colors.onSurface,
  },
  bodyLg: {
    fontFamily: fonts.sans,
    fontSize: 18,
    lineHeight: 29,
    color: colors.onSurface,
  },
  bodyMd: {
    fontFamily: fonts.sans,
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurfaceVariant,
  },
  uiMedium: {
    fontFamily: fonts.sansMedium,
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurface,
  },
  labelCaps: {
    fontFamily: fonts.sansSemibold,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: colors.onSurfaceVariant,
  },
  // Used for big currency amounts on summary screens.
  amount: {
    fontFamily: fonts.serif,
    fontSize: 56,
    lineHeight: 60,
    letterSpacing: -1.12,
    color: colors.primary,
  },
} satisfies Record<string, TextStyle>;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 48,
  containerMargin: 20,
  gutter: 12,
} as const;

export const radius = {
  sm: 2,
  base: 4,
  md: 6,
  lg: 8,
  xl: 12,
  full: 9999,
} as const;

/**
 * Soft, diffused ambient shadow tinted with warm earth — used sparingly for
 * raised surfaces (modals, the active item in a list). Avoid heavy blurs.
 */
export const elevation = {
  raised: {
    shadowColor: "#2d2926",
    shadowOpacity: 0.05,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
} as const;
