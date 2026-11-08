# Make Sense? app

Free courses with registration open right now, and when each one closes. The journey and its events are in `03-build/mvp-boundary.md` and `03-build/analytics/event-schema.md`.

## Run it locally

1. `cp .env.example .env.local` and fill in the five values (Neon connection string, PostHog project key).
2. Run `db/schema.sql` once in the Neon SQL Editor, then add real courses with the insert at the bottom of that file.
3. `npm install`, then `npm run dev`, and open http://localhost:3000/?src=groupchat

## What is where

| Path | What it does | Journey step |
|---|---|---|
| `app/page.tsx` | Reads the open courses from the database | 1 |
| `app/course-list.tsx` | The list, the course card, Share, and the "New" label | 1, 2, 4, 5 |
| `app/go/[id]/route.ts` | Writes the click to `signup_clicks`, fires `student_opens_signup_page`, redirects to the provider | 3 |
| `lib/courses.ts` | The open-courses query ("today" is Tbilisi time) | |
| `db/schema.sql` | Tables, the insert for a new course, the reconcile query | |
| `instrumentation-client.ts`, `next.config.ts` | PostHog in the browser, and the `/ingest` proxy | |

Analytics: PostHog US cloud (us.posthog.com).

Deploy: Vercel, Root Directory `app`, the five variables from `.env.example`. Steps in `Lab-6/setup/SHIP-STACK-SETUP.md` (course repo).
