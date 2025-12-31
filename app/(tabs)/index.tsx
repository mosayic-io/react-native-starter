import { spacing, typography } from "@/lib/theme";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/bg-gradient.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <Image
        source={require("@/assets/images/splash-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>You&apos;re all set!</Text>
      <Text style={styles.subtitle}>
        Your development environment is ready. Now try using the AI agent to
        create something!
      </Text>
      <Text style={[styles.subtitle, { marginTop: spacing.sm }]}>
        Don&apos;t be shy, this project is just a fun way to explore
        the AI agents capabilities, we&apos;ll throw it away afterwards.
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.title,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.subtitle,
    textAlign: "center",
  },
});
