import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Chip, ProgressBar, Screen, Text } from "@/components";
import { colors, spacing } from "@/lib/theme";

export default function HomeScreen() {
  return (
    <Screen scrollable>
      <Text variant="labelCaps">Welcome back</Text>
      <Text variant="h1" style={styles.heading}>
        You&apos;re all set.
      </Text>
      <Text variant="bodyLg" style={styles.subhead}>
        A quiet place to build. Edit{" "}
        <Text variant="bodyLg" style={styles.code}>
          app/(tabs)/index.tsx
        </Text>{" "}
        and watch your changes appear live.
      </Text>

      <Card style={styles.section}>
        <View style={styles.row}>
          <Text variant="uiMedium">5 of 12 claimed</Text>
          <Text variant="labelCaps" style={styles.muted}>
            42%
          </Text>
        </View>
        <ProgressBar progress={5 / 12} style={styles.progress} />
        <View style={styles.avatarRow}>
          <Avatar initials="JK" paletteIndex={0} />
          <Avatar initials="MR" paletteIndex={1} />
          <Avatar initials="SP" paletteIndex={2} />
          <Avatar initials="+2" paletteIndex={3} />
        </View>
      </Card>

      <Text variant="h3" style={styles.sectionTitle}>
        Components
      </Text>

      <View style={styles.chipRow}>
        <Chip label="Coffee" paletteIndex={0} />
        <Chip label="Lunch" paletteIndex={1} selected />
        <Chip label="Drinks" paletteIndex={4} />
      </View>

      <Card active style={styles.section}>
        <Text variant="uiMedium">Tortilla de Patatas</Text>
        <Text variant="bodyMd" style={styles.price}>
          €14.00
        </Text>
      </Card>

      <Card style={styles.section}>
        <Text variant="uiMedium">Pan con Tomate</Text>
        <Text variant="bodyMd" style={styles.price}>
          €4.50
        </Text>
      </Card>

      <View style={styles.buttonRow}>
        <Button label="Split now" style={styles.flex} />
        <Button label="Save" variant="secondary" style={styles.flex} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: spacing.xs,
  },
  subhead: {
    marginTop: spacing.md,
    color: colors.onSurfaceVariant,
  },
  code: {
    color: colors.primary,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  muted: {
    color: colors.onSurfaceVariant,
  },
  progress: {
    marginTop: spacing.md,
  },
  avatarRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  chipRow: {
    flexDirection: "row",
    gap: spacing.sm,
    flexWrap: "wrap",
  },
  price: {
    color: colors.primary,
    marginTop: spacing.xs,
  },
  buttonRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  flex: {
    flex: 1,
  },
});
