import { neon } from "@neondatabase/serverless";

// Created on first use, so `npm run build` works without a database.
let client: ReturnType<typeof neon> | null = null;

export function sql() {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set (app/.env.local locally, Vercel env vars in production)");
    client = neon(url);
  }
  return client;
}
