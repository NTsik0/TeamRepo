# Sprint 1

Sprint 1 runs from the Week 6 lab to the Week 7 lab (after the midterm break) and ends at the gate: deployed at a public URL, north star event firing in PostHog. Everything here is sized to the hours we actually have.

## Definition of done

A story is done when it is merged to `main`, deployed at the public Vercel URL, walked on a phone by the teammate who did not build it, and its event shows in PostHog's Activity view.

## Real hours before the Week 7 lab

| Initials | Hours free | When, specifically |
|---|---|---|
| NTS | ? | ? |
| GTS | ? | ? |
| **Total** | **?** | |

## The board

GitHub Projects on the team repo, linked from the README. Columns: next, doing, review, done. One card per story below. Merge to `main` every day we work.

## Stories

### S6 · Deploy and instrument · owner NTS · reviewer GTS · 3 h

Done first, on the first evening, with `Lab-6/setup/SHIP-STACK-SETUP.md`, so every later story deploys the day it merges. Neon project created and `app/db/schema.sql` run; Vercel project with Root Directory `app` and the five environment variables; public URL in the README's Live product and Prototype rows; every schema event visible in PostHog's Activity view; reconcile check written under Reconcile plan in `03-build/analytics/event-schema.md`.

### S3 · Sandro taps "Go to sign-up" ★ · owner NTS · reviewer GTS · 2 h

**As** Sandro, **I** tap "Go to sign-up" on a course **so that** I reach the provider's sign-up page while registration is still open, not a day late.

**Acceptance criteria:**
- Given a course card for a course whose `closes_at` is today or later, when I tap "Go to sign-up", then the provider's page from that course's `signup_url` opens on my phone
- And one new row exists in `signup_clicks` with that `course_id` and my `student_id`
- And `student_opens_signup_page` fires once with `student_id`, `course_id`, `provider`, `days_until_close`, `days_since_opened`
- And `/go/<id>` for a course whose `closes_at` is in the past redirects back to the list, writes no row and fires no event

**Smallest demo that proves it:** tap Go to sign-up on a phone, show the provider page, the new row in Neon, and the event in PostHog.

### S1 · Sandro opens the list from a group chat link · owner NTS · reviewer GTS · 2 h

**As** Sandro, **I** open the link a friend posted **so that** I see every free course with registration open right now in one place.

**Acceptance criteria:**
- Given at least three courses in `courses` with `closes_at` today or later and one with `closes_at` yesterday, when I open `/?src=groupchat` on a phone, then I see the three open courses, newest first, each with provider and "closes in N days", and not the closed one
- And the page needs no pinch-zoom on a phone
- And `student_opens_course_list` fires once per load with `student_id`, `source` = `groupchat`, `open_course_count` = 3

**Smallest demo that proves it:** open the link on a phone, show that the closed course is missing, show the event.

### S2 · Sandro opens a course card · owner GTS · reviewer NTS · 2 h

**As** Sandro, **I** open one course **so that** I can decide by hours and certificate without leaving for the provider's site.

**Acceptance criteria:**
- Given the list, when I tap a course, then I see its provider, title, total hours, "Free", whether it gives a certificate, the closing date, and a "Go to sign-up" button
- And `student_opens_course_card` fires once per tap with `student_id`, `course_id`, `provider`, `days_until_close`

**Smallest demo that proves it:** tap a course on a phone, show the card and the event.

### S4 · Sandro shares a course · owner GTS · reviewer NTS · 2 h

**As** Sandro, **I** share a course with a friend **so that** they hear about it while registration is still open.

**Acceptance criteria:**
- Given an open course card on a phone, when I tap Share, then the phone's share sheet opens with the course title and a link to the list with `?src=friend`; on a browser without a share sheet, the link is copied and the button says "Link copied"
- And `student_shares_course` fires only after the share or copy succeeds, with `student_id`, `course_id`, `channel` (`share_sheet` or `copy_link`); cancelling the share sheet fires nothing

**Smallest demo that proves it:** share to a teammate's chat, open the received link, show the event.

### S5 · Sandro comes back and sees what is new · owner GTS · reviewer NTS · 2 h

**As** Sandro, **I** come back to the list days later **so that** I see straight away which courses opened since I last looked.

**Acceptance criteria:**
- Given I opened the list before on this phone, and a course was added after that visit, when I open the list again, then that course has a "New" label and older courses do not
- And `student_returns_to_course_list` fires once per load with `student_id`, `days_since_last_visit`, `new_since_last_visit`; on my first visit it does not fire
- And the first visit on a new phone shows no "New" labels

**Smallest demo that proves it:** open the list, add a course in Neon, reload on the same phone, show the label and the event.

### S7 · Real courses in the database · owner GTS · reviewer NTS · 1 h

Before the first test session: at least five real free courses with registration open right now, each checked on the provider's own site (title, total hours, certificate, closing date, sign-up link), added with the insert in `app/db/schema.sql`. A course past its closing date is not deleted; it simply stops showing.

## Slip rule

Written now, obeyed later. If S5 is not done by the evening before the Week 7 lab, the "New" label and `student_returns_to_course_list` move to Sprint 2; S3 (the sign-up tap, its `signup_clicks` row and `student_opens_signup_page`) and S6 (deployed with events in PostHog) stay no matter what, because without them the value does not land and the gate fails.
