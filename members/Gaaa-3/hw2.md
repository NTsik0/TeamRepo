# Homework 2 · Guram Tsiklauri (@Gaaa-3) · Make Sense?

## 1. Ship report

| What | Story or rung | Commit link | Live? | Walked or checked by |
|---|---|---|---|---|
| Walked all 5 steps of the MVP on my phone — 23 Nov 2026, 20:05, Chrome, on NTS's hotspot, plain URL (no `?src=`): list, course card, "Go to sign-up", share, return. | R1 · walked on phone | [9de45db](https://github.com/NTsik0/TeamRepo/commit/9de45db) | Yes — all five events Live in PostHog, north star firing from production | GTS walked; NTS read each event in PostHog Activity aloud |
| Wednesday dashboard look — counts on the public dashboard and one thing to change, or nothing. | F2 · dashboard look | [f28dfb6](https://github.com/NTsik0/TeamRepo/commit/f28dfb6d6a3edb393829655b164e3f30ee5df2c0) | — | GTS |

**Least sure works:** the "New" label. No course was added between my two visits, so the label never appeared and I have not seen that path work end to end. I will know by Lab 8: add one course in Neon between two visits to the list on the same phone, then check that `student_returns_to_course_list` fires with `new_since_last_visit > 0` in PostHog and that the "New" label shows on the second load.

**Beyond my assigned story:** I resolved the merge conflict on `03-build/sprints/sprint-2.md` myself — kept both NTS's Monday line and my walk line ([1c3ebf6](https://github.com/NTsik0/TeamRepo/commit/1c3ebf6)).

## 2. Pattern journal, Weeks 5–7 (written after the fact)

**Week 5 · One metric that matters.** The north star in `03-build/analytics/event-schema.md` is `student_opens_signup_page`, fired from the server in `/go/[id]` because the browser leaves for the provider on the same tap. The metric follows from the evidence — 7 of 10 students missed a free course they wanted, and the reason was never that the course was missing, it was that they found out too late. What makes it a real metric and not just a count is the reconcile plan: `signup_clicks` rows must equal the PostHog count for the same window, or the number is untrustworthy.

**Week 6 · Smallest complete journey.** `03-build/mvp-boundary.md` is Sandro's five steps and nothing more. My part was reviewing the reconcile plan in `03-build/analytics/event-schema.md` and the dashboard tiles: every "Go to sign-up" tap writes a row to `signup_clicks`, and the PostHog count must match it — because if the PostHog key is missing in Vercel, the redirect still works and nobody notices. The cut list is the discipline: search box, accounts, alerts all out, each with a "comes back when".

**Week 7 · Ship to learn.** The gate in `03-build/sprints/sprint-1.md` is deployed URL plus north star firing in PostHog, and "done" means walked on a phone by the teammate who did not build it. I walked all five steps: plain URL, card, "Go to sign-up", share, return. The happy path worked. What did not get exercised is the "New" label — no course was added between my two visits, so I have no evidence it works. That is the gap I would close before the next test.

## 3. My DECISIONS line

> Wk5 · Keep the problem statement as it is: logs 08 and 09 confirm the timing problem — Lasha missed university-advertised courses because he heard late, and Luka saw a course QR code in the dorm lift and missed it when the lift broke · evidence: 01-discovery/interview-logs/08-student-kutaisi.md, 09-student-kutaisi.md · owner: GTS

## 4. Field-week person

Leo, KIU student who looks for free courses (usability session 5). I am the reviewer on F1, so this is read from the record rather than from a message I sent: the production link reached Leo through NTS's Instagram or Discord message on Mon 23 Nov, sent with the other four testers. As of 23 Nov 21:10 his "Opened?" cell in `sprint-2.md` is "Not yet" — the link has reached him and he has not opened it. I will read his status from PostHog and fill that cell before Lab 8, and I will flag to NTS if it is still empty on Wednesday's dashboard look.
