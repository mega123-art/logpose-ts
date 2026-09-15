import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const databaseUrl = (
  globalThis as typeof globalThis & {
    process?: { env?: { DATABASE_URL?: string } };
  }
).process?.env?.DATABASE_URL;

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl!,
  },
});
