# Homework 2 · Nikoloz Tsikaridze (@NTsik0) · Make Sense?

## 1. Ship report

| What I shipped | Story or rung | Commit link(s), from my account | Live at the production URL? | Walked or checked by |
|---|---|---|---|---|
| Event schema with the north star `student_opens_signup_page`, and the prototype test plan | Lab 5 | [85b196b](https://github.com/NTsik0/TeamRepo/commit/85b196b) | n/a | GTS read it |
| MVP boundary, architecture and Sprint 1 plan, with real hours | Lab 6 | [31b0531](https://github.com/NTsik0/TeamRepo/commit/31b0531), [213c247](https://github.com/NTsik0/TeamRepo/commit/213c247) | n/a | GTS read it |
| The app: open-courses list, course card, "Go to sign-up" redirect that writes a `signup_clicks` row and fires the north star from the server, share, "New" label | S1, S2, S3, S4, S5 | [74ddafe](https://github.com/NTsik0/TeamRepo/commit/74ddafe) | Yes | GTS walked S1 to S5 on his phone on 23 Nov (NTS's hotspot, not our Wi-Fi); NTS saw every event in PostHog Activity. S1 to S3 also by five testers on 20 Nov (`02-design/user-testing/usability-findings.md`) |
| Deploy on Vercel, PostHog pointed to US cloud, gate recorded | S6, rungs 1 to 4 | [6c47a00](https://github.com/NTsik0/TeamRepo/commit/6c47a00), [04d399f](https://github.com/NTsik0/TeamRepo/commit/04d399f), [dc0e793](https://github.com/NTsik0/TeamRepo/commit/dc0e793), [0953c38](https://github.com/NTsik0/TeamRepo/commit/0953c38) | Yes | Reconcile on 8 Nov: 3 in PostHog = 3 rows in `signup_clicks` (our own test taps); again on 23 Nov after GTS's walk: 21 = 21 (`03-build/analytics/event-schema.md`) |
| Public PostHog dashboard: north star trend, then journey funnel and retention tiles on 23 Nov | Rung 5 | [9981984](https://github.com/NTsik0/TeamRepo/commit/9981984), [c5ec2bc](https://github.com/NTsik0/TeamRepo/commit/c5ec2bc) | Yes | Opened without a login in a private window |
| Lab 7 gate: `Live` column and gate reconcile (21 = 21) in the event schema, Sprint 2 with the field week, first Monday look | R1, R2, F1, F2 | [c5ec2bc](https://github.com/NTsik0/TeamRepo/commit/c5ec2bc), [68f62bd](https://github.com/NTsik0/TeamRepo/commit/68f62bd) | Yes | GTS walked; NTS read PostHog and ran both counts |
| Interview log 10 and the updated synthesis | Discovery | [6a55151](https://github.com/NTsik0/TeamRepo/commit/6a55151), [cdbb697](https://github.com/NTsik0/TeamRepo/commit/cdbb697) | n/a | GTS read it |
| Five prototype test sessions on Discord screen share, timed against PostHog, and the test plan | Test plan, sessions 1 to 5 | [0d84220](https://github.com/NTsik0/TeamRepo/commit/0d84220) | n/a | GTS logged one tester on the joint call |

**The piece I am least sure works for a real person, and how I will know by Lab 8:** step 5, coming back. None of the five testers was asked to return, so the "New" label and `student_returns_to_course_list` are untested with real people. By Lab 8 I will read the retention chart on the dashboard and count `student_returns_to_course_list` for the five testers' PostHog IDs: zero returns means step 5 does not pull anyone back yet.

**One thing I did that was not my assigned story:** S7, real courses in the database, was GTS's story. The only course, TBC IT Academy iOS Development, closed on 19 November, so the list was empty. On 20 November I checked providers' own pages and added CS50x and two EPAM Campus courses open to Georgian students (Data Analytics & QE, Modern SAP Development), before the test sessions. The three courses are named in `02-design/user-testing/usability-findings.md`. The database change has no commit, because courses live in Neon.

## 2. Pattern journal, Weeks 5 to 7

I am writing these reflections in Week 8, looking back at Weeks 5 to 7.

### Week 5 · One metric that matters

I chose `student_opens_signup_page` as our main metric because it measures whether students actually reach a course's registration page while registration is still open, rather than simply browsing the course list. Beyond my own stories, I wrote our synthesis and problem statement from the interview logs. As a quick experiment, I rebuilt the interview form using mostly closed questions, so that even short interviews would give us specific, comparable answers, including exact quotes.

### Week 6 · The smallest complete journey

I applied this idea by focusing on a five-step student journey: opening the course list, viewing a course card, reaching the registration page, sharing a course and returning to see newly added courses. We cut alerts, search and student accounts because they were not necessary to test our main assumption. Beyond my assigned stories (S1, S3 and S6), I built Guram's stories myself: the course card, sharing and the "New" label. For testing, I used the live application's first screen as our prototype, opening the deployed app on my phone instead of building a separate mock-up.

### Week 7 · Ship to learn

I put the live application in front of five KIU students and observed what they actually did; all five reached a course's sign-up page within 90 seconds, in 19 to 38 seconds. Beyond my assigned responsibilities, I added real courses to the database, completing Guram's S7 story. I also excluded our own activity from the analytics: I put our three team devices in a "Team devices" cohort in PostHog and filtered it out of every insight, so our metrics show real students, not our testing.

## 3. My DECISIONS.md lines

> Wk5 · Problem statement v1 holds after logs 08 and 09: 6 of 9 missed a free course, 8 of 9 heard through a friend, still 0 of 9 named a missing KIU subject in their own words · evidence: 01-discovery/interview-logs/08-student-kutaisi.md, 09-student-kutaisi.md, synthesis/affinity-map.md, 01-discovery/problem-statement.md · owner: NTS

The evidence is the counts across nine interview logs, in the affinity map and the problem statement.

> Wk6 · North star: free-course sign-up pages opened while registration is still open, per active student per month; rejected course-list visits per month (counts presence, not value: fails test 1) and courses added to the list per month (counts our work, not the student's value: fails test 1) · evidence: 03-build/analytics/event-schema.md, 01-discovery/interview-logs/03-student-kutaisi.md, 05-student-kutaisi.md, 06-student-kutaisi.md, 07-student-kutaisi.md, 08-student-kutaisi.md, 09-student-kutaisi.md · owner: NTS

Six logs show students missing courses because they heard too late; opening a sign-up page while it is still open is the moment that problem is solved, and it is defined in the event schema.

> Wk6 · MVP boundary: 5-step journey (student opens the list from a group chat link to comes back and sees what opened since); cut alerts, search box, accounts · evidence: 03-build/mvp-boundary.md, logs 01 to 09 · owner: NTS

Every cut has a reason and a return condition in the MVP boundary's cut list.

> Wk6 · Prototype track: the first deployed screen of the journey is the prototype; frozen test from 02-design/user-testing/test-plan.md runs on it, 3 sessions before the Week 7 lab · evidence: 03-build/sprints/sprint-1.md S1 · owner: NTS

The sessions ran later than this line promised, on 20 November; they are logged in `usability-findings.md`.

> Wk7 · Problem statement v1 holds after log 10: 7 of 10 missed a free course, 9 of 10 heard through a friend, 0 of 10 named a missing KIU subject in their own words; new from log 10: registration was open 15 to 30 days and he still forgot to check, so a missing reminder may matter more than short windows (one log, not yet a pattern) · evidence: 01-discovery/interview-logs/10-student-kutaisi.md, synthesis/patterns-analysis.md, 01-discovery/problem-statement.md · owner: NTS

Log 10 is the first evidence for a reminder; it is one log, so alerts stay on the cut list.

> Wk7 · Week 7 gate passed: app live at https://team-repo-whfx.vercel.app with one real course (TBC IT Academy iOS Development), north star student_opens_signup_page firing from the server; reconcile matches (3 in PostHog = 3 rows in signup_clicks, our own test taps) · evidence: README.md, 03-build/analytics/event-schema.md (Reconcile plan), app/app/go/[id]/route.ts · owner: NTS

The counts were our own taps, not real students; the five test sessions on 20 November are the first real ones.

> Wk7 · Gate passed again after the walk: live at https://team-repo-whfx.vercel.app, GTS walked all five steps on his phone on 23 Nov and all five events are Live, north star firing from production, PostHog 21 = database 21 (8 to 23 Nov); follows the Wk7 gate line above (8 Nov, 3 = 3, team taps only) · evidence: README links, 03-build/analytics/event-schema.md (Gate reconcile), 03-build/sprints/sprint-2.md (The gate) · owner: NTS

The evidence is GTS's walk on 23 November and the two counts, PostHog and `signup_clicks`, in the gate reconcile block of the event schema.

## 4. My person this week

**The field-week person I am responsible for:** BeKa, KIU student who takes free outside courses (usability session 3, `03-build/sprints/sprint-2.md`) · **how and when the link reaches them:** I send him the production link on Instagram or Discord on Monday 23 November, with the message in our Sprint 2 file, and check his PostHog ID (`698a2bbe`) on my Monday dashboard look for a return on a later day.
