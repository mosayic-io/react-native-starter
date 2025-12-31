import { StyleSheet, Text, View } from "react-native";
import { colors, typography, spacing } from "@/lib/theme";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>JD</Text>
      </View>
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.email}>jane.doe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  avatarText: {
    ...typography.large,
  },
  name: {
    ...typography.heading,
    marginBottom: spacing.xs,
  },
  email: {
    ...typography.body,
  },
});
