# Sprint 2: the field week

Sprint 2 runs from Lab 7 to Lab 8. Real people use the product this week, and Lab 8 opens by reading what they did.

## Sprint 1 review

Our definition of done (`sprint-1.md`): merged to `main`, deployed at the public Vercel URL, walked on a phone by the teammate who did not build it, and its event shows in PostHog's Activity view.

NTS built every story (commit `74ddafe` for S1 to S5; see "What actually happened" in `sprint-1.md`), so the walk has to be done by GTS.

| Story | Owner (plan → actual) | Done by our definition? | If not: which clause is missing, and what happened |
|---|---|---|---|
| S1 Sandro opens the list | NTS → NTS | Partly | Merged, deployed, `student_opens_course_list` in Activity. Missing: GTS's walk. Five testers walked it on 20 Nov, but they are not the teammate the definition names |
| S2 Sandro opens a course card | GTS → NTS | Partly | Same: missing GTS's walk. `student_opens_course_card` seen in Activity for all five testers |
| S3 Sandro taps "Go to sign-up" ★ | NTS → NTS | Partly | Same: missing GTS's walk. `student_opens_signup_page` fires from the server; five testers reached it on 20 Nov |
| S4 Sandro shares a course | GTS → NTS | No | Merged and deployed. Missing: GTS's walk, and `student_shares_course` has not been seen in Activity from anyone |
| S5 Sandro comes back and sees what is new | GTS → NTS | No | Merged and deployed. Missing: GTS's walk. `student_returns_to_course_list` fired, but no real return days later has been seen |
| S6 Deploy and instrument | NTS → NTS | Partly | Live since 8 Nov, reconcile 3 = 3 (team taps). Missing: GTS's walk |
| S7 Real courses in the database | GTS → NTS | Yes, with a gap | Three real courses live (CS50x, two EPAM Campus). The list was empty from 19 Nov, when the only course closed, until 20 Nov |

**Slip rule:** did not fire. S5 was built before the Week 7 lab, so nothing moved to Sprint 2. The missing clause for every story is the same: the walk by the teammate who did not build it.

## The gate

| Rung | Reached? | Evidence: a link or a number | If not: owner, and by when |
|---|---|---|---|
| 1 Production URL loads on a phone | Yes | Live product row in README; five testers on their own devices, 20 Nov | |
| 2 Journey completes there | Yes | Five testers reached a sign-up page in 19 to 38 s (`02-design/user-testing/usability-findings.md`) | |
| 3 North star event in Activity, from production | Yes | `student_opens_signup_page`, library `posthog-node`, on `team-repo-whfx.vercel.app` | |
| 4 Counts reconcile | Yes | 23 Nov, after GTS's walk: PostHog 21 = database 21, 8 to 23 Nov (gate reconcile block in `03-build/analytics/event-schema.md`). Earlier: 8 Nov, 3 = 3 (team taps) | |
| 5 Dashboard, linked in README | Yes | Public link in README; three tiles since 23 Nov: north-star trend, journey funnel, retention on `student_opens_signup_page`; funnel and retention filtered to "not in Team devices"; opened without a login in a private window | |

## Real hours before Lab 8

| Initials | Hours free | When, specifically |
|---|---|---|
| NTS | 7 | Sun 22 Nov, 3 h (Discord, now); Mon 23 Nov, 2 h; Wed 25 Nov, 2 h |
| GTS | 7 | Same slots as NTS; we work together on Discord |
| **Total** | **14** | |

## Stories this week

### R1 · GTS walks the whole journey on his phone · owner GTS · reviewer NTS · 1 h

Closes the missing clause for S1 to S7, and fills the `Live` column in `event-schema.md`.

- GTS opens the production URL on his phone with Wi-Fi off and does all five steps: list, card, sign-up, share, come back
- NTS reads each event in PostHog Activity aloud: name matches the schema, properties present, fired once, from production
- Each event both see gets `yes` in the `Live` column

### R2 · Gate reconcile and the two missing dashboard tiles · owner NTS · reviewer GTS · 1 h

- The gate reconcile block at the bottom of `event-schema.md`: PostHog count and `signup_clicks` count, same window, both written down
- Dashboard tiles: funnel (list → card → sign-up → share) and retention on `student_opens_signup_page`, internal filter on

### F1 · Field week: send the link and watch · owner NTS · reviewer GTS · 1 h

Done when every person in the table below has the production URL, and their "Opened?" cell is filled from PostHog.

### F2 · Dashboard looks · owners NTS (Mondays) and GTS (Wednesdays) · 1 h

Sum: 4 of 14 hours. The other ten are held for whatever the field week breaks, and for adding courses as new ones open.

## Field week: who uses it

| Code name and role | Log or session they come from | How the link reaches them | Sent by, and by when | Opened? (fill in during the week) |
|---|---|---|---|---|
| Nini, KIU student | Usability session 1 (20 Nov) | Instagram or Discord message | NTS, Mon 23 Nov | Yes, 23 Nov 21:01, phone, came in from Instagram: list only so far (recognised as returning from 20 Nov) |
| Gaga, KIU student | Usability session 2 | Instagram or Discord message | NTS, Mon 23 Nov | Yes, 23 Nov ~20:45, desktop: list, CS50x card; no sign-up page |
| BeKa, KIU student | Usability session 3 | Instagram or Discord message | NTS, Mon 23 Nov | Not yet (23 Nov, 21:10) |
| Anushki, KIU student who looks for free courses | Usability session 4 | Instagram or Discord message | NTS, Mon 23 Nov | Yes, 23 Nov 20:50: list, DA&QE card, sign-up page (EPAM DA&QE), back to list, CS50x card, shared a course |
| Leo, KIU student who looks for free courses | Usability session 5 | Instagram or Discord message | NTS, Mon 23 Nov | Not yet (23 Nov, 21:10) |

**What we tell them:** "This is the course list we tested. Use it whenever you're looking for a free course; it's a compact space for motivated students like you. It's a student project; we count clicks, never names."

All five have seen the app in a test session, so this week tests step 5: whether they come back on their own on a later day.

## Prediction

Written before the week starts. Never edited afterwards; Lab 8 reads it as written.

**By Lab 8:** 4 `student_opens_signup_page` events from real people, not our team, counted from 23 Nov, when the link goes out. Also: 3 of the 5 come back on a later day than their test session (`student_returns_to_course_list` from their PostHog IDs).

**We are wrong if:** fewer than 3 `student_opens_signup_page` events from real people between 23 Nov and Lab 8.

**Mid-week look:** NTS opens the public dashboard every Monday and GTS every Wednesday, and each writes one line here: what the counts are and one thing we change because of them, or nothing.

- Mon 23 Nov · NTS · within 20 minutes of the link going out: 3 of 5 opened (Gaga, Anushki, Nini); 1 `student_opens_signup_page` from a real person since 23 Nov (Anushki, EPAM DA&QE), 1 real share (first one; the funnel's share step was 0 before); one new person (`3f197785`) came in from Instagram 40 s after Anushki's tap, not counted as a tester. All three returns today came right after our message, so they do not yet show step 5 on its own. Change: nothing yet.
