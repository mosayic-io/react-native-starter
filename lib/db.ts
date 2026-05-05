import type { SQLiteDatabase } from "expo-sqlite";

export const DATABASE_NAME = "app.db";

export type Profile = {
  id: number;
  name: string;
  email: string;
};

const EMPTY_PROFILE: Profile = { id: 1, name: "", email: "" };

/**
 * Runs once when the database first opens. Creates the schema and seeds the
 * single profile row that the Profile screen reads from / writes to.
 */
export async function migrateDb(db: SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT ''
    );
    INSERT OR IGNORE INTO profile (id, name, email) VALUES (1, '', '');
  `);
}

export async function getProfile(db: SQLiteDatabase): Promise<Profile> {
  const row = await db.getFirstAsync<Profile>(
    "SELECT * FROM profile WHERE id = 1",
  );
  return row ?? EMPTY_PROFILE;
}

export async function saveProfile(
  db: SQLiteDatabase,
  profile: Pick<Profile, "name" | "email">,
) {
  await db.runAsync(
    "UPDATE profile SET name = ?, email = ? WHERE id = 1",
    profile.name,
    profile.email,
  );
}
