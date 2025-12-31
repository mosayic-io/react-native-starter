import { TextStyle } from "react-native";

export const colors = {
  primary: "#007AFF",
  background: "#ffffff",
  text: "#000000",
  textSecondary: "#666666",
  white: "#ffffff",
};

export const typography: Record<string, TextStyle> = {
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  body: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.text,
  },
  large: {
    fontSize: 40,
    fontWeight: "600",
    color: colors.white,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
