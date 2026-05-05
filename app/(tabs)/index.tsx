import { Image, StyleSheet, View } from "react-native";
import { Screen, Text } from "@/components";
import { colors, spacing } from "@/lib/theme";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/splash-icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text variant="h1" style={styles.title}>
          You&apos;re all set.
        </Text>
        <Text variant="bodyLg" style={styles.subtitle}>
          Your development environment is ready. Now try using the AI agent to
          create something.
        </Text>
        <Text variant="bodyMd" style={styles.subtitle}>
          Don&apos;t be shy — this project is just a fun way to explore the AI
          agent&apos;s capabilities. We&apos;ll throw it away afterwards.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: spacing.lg,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    color: colors.onSurfaceVariant,
    textAlign: "center",
  },
});
