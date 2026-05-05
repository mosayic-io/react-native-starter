import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Input, Screen, Text } from "@/components";
import { colors, spacing } from "@/lib/theme";

export default function ProfileScreen() {
  return (
    <Screen scrollable>
      <View style={styles.hero}>
        <Avatar initials="JD" size={96} paletteIndex={0} />
        <Text variant="h2" style={styles.name}>
          Jane Doe
        </Text>
        <Text variant="bodyMd">jane.doe@example.com</Text>
      </View>

      <Card style={styles.section}>
        <Text variant="labelCaps" style={styles.muted}>
          Account
        </Text>
        <Input
          label="Display name"
          defaultValue="Jane Doe"
          containerStyle={styles.field}
        />
        <Input
          label="Email"
          defaultValue="jane.doe@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.field}
        />
      </Card>

      <Button label="Save changes" style={styles.save} />
      <Button label="Sign out" variant="ghost" style={styles.signOut} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    paddingVertical: spacing.lg,
    gap: spacing.sm,
  },
  name: {
    marginTop: spacing.sm,
  },
  section: {
    marginTop: spacing.md,
    gap: spacing.md,
  },
  muted: {
    color: colors.onSurfaceVariant,
  },
  field: {
    marginTop: spacing.xs,
  },
  save: {
    marginTop: spacing.lg,
  },
  signOut: {
    marginTop: spacing.sm,
  },
});
