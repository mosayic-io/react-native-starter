import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { Avatar, Button, Card, Input, Screen, Text } from "@/components";
import { colors, spacing } from "@/lib/theme";
import { getProfile, saveProfile } from "@/lib/db";

export default function ProfileScreen() {
  const db = useSQLiteContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    getProfile(db).then((profile) => {
      if (cancelled) return;
      setName(profile.name);
      setEmail(profile.email);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [db]);

  const onSave = async () => {
    setSaving(true);
    try {
      await saveProfile(db, { name, email });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  };

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <Screen scrollable>
      <View style={styles.hero}>
        <Avatar initials={initials || "?"} size={96} paletteIndex={0} />
        <Text variant="h2" style={styles.name}>
          {name || "Your name"}
        </Text>
        <Text variant="bodyMd">{email || "you@example.com"}</Text>
      </View>

      <Card style={styles.section}>
        <Text variant="labelCaps" style={styles.muted}>
          Account
        </Text>
        <Input
          label="Display name"
          value={name}
          onChangeText={setName}
          editable={loaded}
          placeholder="Jane Doe"
          containerStyle={styles.field}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          editable={loaded}
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.field}
        />
      </Card>

      <Button
        label={saving ? "Saving…" : "Save changes"}
        onPress={onSave}
        loading={saving}
        disabled={!loaded}
        style={styles.save}
      />

      {savedAt ? (
        <Text variant="bodyMd" style={styles.savedHint}>
          Saved to your device.
        </Text>
      ) : null}
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
  savedHint: {
    color: colors.onSurfaceVariant,
    marginTop: spacing.sm,
    textAlign: "center",
  },
});
