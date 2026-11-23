# HW2 · Guram Tsiklauri (@Gaaa-3) · team NTS-GTS

## 1. Ship report

| What I did this week | Evidence |
|---|---|
| Walked all 5 steps of the MVP on a phone (R1), 23 Nov 2026, 20:05, Chrome, on NTS's hotspot: opened the plain URL (no `?src=`), opened a course card, tapped "Go to sign-up", shared a course, came back to the list. | [sprint-2.md Mid-week look](https://github.com/NTsik0/TeamRepo/blob/9de45db/03-build/sprints/sprint-2.md) |
| Pushed the Wednesday dashboard look to `sprint-2.md` (F2). | [9de45db](https://github.com/NTsik0/TeamRepo/commit/9de45db) |
| Wrote interview logs 08 and 09. | [08-student-kutaisi.md](https://github.com/NTsik0/TeamRepo/blob/main/01-discovery/interview-logs/08-student-kutaisi.md) · [09-student-kutaisi.md](https://github.com/NTsik0/TeamRepo/blob/main/01-discovery/interview-logs/09-student-kutaisi.md) |
| Reviewed NTS's reconcile plan and the dashboard tiles (R2). | [event-schema.md · Reconcile plan](https://github.com/NTsik0/TeamRepo/blob/main/03-build/analytics/event-schema.md) |

Least sure works: the "New" label. No course was added between my two visits, so the label never appeared and I have not seen that path work end to end.

Not my story: NTS was watching PostHog during the walk. The 21 = 21 reconcile count and the dashboard tile numbers are his observation, not mine.

## 2. Pattern journal, Weeks 5–7

**Week 5 · One metric that matters.** I wrote logs 08 and 09 this week. Lasha missed university-advertised courses because he heard about them late, and Luka saw a course QR code in the dorm lift and missed the course when the lift broke. Both described the same shape: the course was there, and the information did not reach them in time. That is why the north star in `event-schema.md` is `student_opens_signup_page` — the moment that matters is arriving at the sign-up page while registration is still open, not seeing the list.

**Week 6 · Smallest complete journey.** I reviewed NTS's reconcile plan in `03-build/analytics/event-schema.md` and the dashboard tiles. The plan says every tap on "Go to sign-up" writes a row to `signup_clicks`, and the PostHog count of `student_opens_signup_page` must match that row count for the same seven days. The second count exists because if the PostHog key is missing in Vercel, the redirect still works and nobody notices — the reconcile is what catches it.

**Week 7 · Ship to learn.** I walked all five steps of `mvp-boundary.md` on my phone: plain URL, course card, "Go to sign-up", share, and return to the list. The happy path worked. What did not get exercised is the "New" label — no course was added between my two visits, so I have no evidence the label appears. That is the gap I would close before the next test session: add a course in Neon between two visits and confirm the label shows on the second load.

## 3. My DECISIONS line

> Wk5 · Keep the problem statement as it is: logs 08 and 09 confirm the timing problem — Lasha missed university-advertised courses because he heard late, and Luka saw a course QR code in the dorm lift and missed it when the lift broke · evidence: 01-discovery/interview-logs/08-student-kutaisi.md, 09-student-kutaisi.md · owner: GTS

## 4. Field-week person

I followed up with BeKa (KIU student, usability session 3) on 23 Nov by Instagram message, asking whether the production link NTS sent reached him and how it got to him. As of writing his reply is pending; if it arrives before the HW2 deadline I will replace this paragraph with what he says, and either way I will bring his answer to Lab 8 for the "Opened?" column in `sprint-2.md`.