# Event Schema

Your metric is only as good as your instrumentation. Every row here becomes one `capture()` call in the app and one dashboard tile in Week 7. Names are copied from this file, never retyped.

**North star:** Free-course sign-up pages opened while registration is still open, per active student per month.

**North star event:** `student_opens_signup_page`

**How the north star is computed from events:** count of `student_opens_signup_page` where `days_until_close` is 0 or more, divided by the number of students (distinct `student_id`) with at least one `student_opens_course_list` in the same calendar month.

## Events

| Step | Event (actor_verb_object) | Fired by | Properties (never a name, phone, email, or message text) | Owner |
|---|---|---|---|---|
| Acquisition | `student_opens_course_list` | student (browser, on page load) | student_id, source (groupchat, friend, qr, other, from `?src=`), open_course_count | NTS |
| Activation (precursor) | `student_opens_course_card` | student (browser, on tap) | student_id, course_id, provider, days_until_close | GTS |
| Activation (north star) ★ | `student_opens_signup_page` | student (server, in the `/go/[id]` route, after the click row is written, just before the redirect to the provider) | student_id, course_id, provider, days_until_close, days_since_opened | NTS |
| Referral | `student_shares_course` | student (browser, after the share sheet or copy succeeds) | student_id, course_id, channel (share_sheet, copy_link) | GTS |
| Retention | `student_returns_to_course_list` | student (browser, on page load when this phone has visited before) | student_id, days_since_last_visit, new_since_last_visit | GTS |

Revenue is empty on purpose: every course is free, and nothing is paid for before Week 12.

## Rules we are following

- One name per event, one spelling, lowercase with underscores.
- `student_id` on every event. It is PostHog's anonymous id for that phone, made up by the app. No names, emails, phone numbers or KIU ids anywhere in analytics.
- The north star event is fired for the student, because the student receives the value: reaching the sign-up page before registration closes is the thing 7 of 10 missed (logs 03, 05, 06, 07, 08, 09, 10).
- `student_opens_signup_page` fires from the server, not the browser, because the browser leaves the page for the provider's site on the same tap and a browser event can be lost on the way out.

## Reconcile plan

Before we believe the dashboard, we count the north star event a second way.

**Event most likely to fail silently:** `student_opens_signup_page`
**How it would fail:** never fires: the `/go/[id]` route redirects before `posthog.flush()` finishes, or `POSTHOG_KEY` is missing in Vercel, so the redirect still works and nobody notices.
**The check that would catch it:** every tap also writes a row to the `signup_clicks` table. Count rows in `signup_clicks` for the same 7 days (`select count(*) from signup_clicks where clicked_at > now() - interval '7 days';`) and compare with the PostHog count of `student_opens_signup_page`. They must be equal.
**Who runs the check in Week 7:** NTS

**First run, 8 November 2026 (team test taps, not testers):** PostHog showed 3 `student_opens_signup_page` events from `posthog-node`; `select count(*) from signup_clicks;` returned 3. They match. The same anonymous `student_id` appears on the browser events and the server event, so one student's journey joins up. These 3 are our own taps and are left out of the north star.
