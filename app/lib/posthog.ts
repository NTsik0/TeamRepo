import { PostHog } from "posthog-node";

// Server-side PostHog client, for events that fire after a database write.
// Every route that captures must `await posthog.flush()` before it returns.
export const posthog = new PostHog(process.env.POSTHOG_KEY ?? "missing-key", {
  host: process.env.POSTHOG_HOST,
  flushAt: 1,
  flushInterval: 0,
  disabled: !process.env.POSTHOG_KEY,
});
