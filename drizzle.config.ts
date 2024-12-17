import '@/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config();

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL || "postgres://default:XysH92hEgiPa@ep-bold-butterfly-a43r5xo2-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
  },
});