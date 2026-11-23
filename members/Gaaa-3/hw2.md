\# HW2 · Gaaa-3 · Guram Tsiklauri



\## Ship report



This week I walked Sandro's full journey end to end on the deployed app, all five steps (R1): opened the list from a `?src=groupchat` link, opened a course card, tapped "Go to sign-up", shared a course to a teammate, and came back later to see the "New" label on a course added after my first visit. Every step behaved as `03-build/mvp-boundary.md` describes it, and the events fired in PostHog in the order the schema predicts.



I also reviewed NTS's work on the analytics side (R2): the reconcile plan in `03-build/analytics/event-schema.md` (the `signup\_clicks` count must equal the PostHog count of `student\_opens\_signup\_page` — 21 = 21 on the walk), and the dashboard tiles in the public PostHog dashboard linked from the README. Both matched what the event schema says they should show.



\## Pattern journal, Weeks 5–7



\*\*Week 5 · One metric that matters.\*\* The north star in `03-build/analytics/event-schema.md` is `student\_opens\_signup\_page`, and it is deliberately not the click. It fires server-side, in `/go/\[id]`, because the browser leaves for the provider's site on the same tap and a browser event can be lost on the way out. The reconcile plan is the part I trust most: every tap also writes a row to `signup\_clicks`, and before we believe the dashboard we count the same seven days a second way and require the two numbers to be equal. One metric, two independent counts — if the PostHog key is ever missing in Vercel the redirect still works, and only the reconcile check would catch it.



\*\*Week 6 · Smallest complete journey.\*\* `03-build/mvp-boundary.md` is the smallest thing that still tests whether the product creates value: Sandro's five steps, nothing else. The cut list is what makes it smallest, and each cut has a "comes back when": no search box (we want the sessions to show whether a short list is enough), no student accounts (nothing in the journey needs to know who Sandro is), no AI recommendations (with five to ten courses open at a time there is nothing to recommend between). Step 2, the course card, is the one we kept even though it looked optional — students choose by hours and certificate, and without the card they would leave for the provider's site to check.



\*\*Week 7 · Ship to learn.\*\* Sprint 1's gate in `03-build/sprints/sprint-1.md` is deployed at a public URL with the north star firing in PostHog, and "done" means walked on a phone by the teammate who did not build it. The slip rule is the interesting part: if S5 slips, the "New" label and `student\_returns\_to\_course\_list` move to Sprint 2, but S3 (the sign-up tap and its row) and S6 (deployed, events in PostHog) cannot, because without them the value does not land and the gate fails. Ship the thing that tests the hypothesis; let the polish slip.



\## My DECISIONS line



Week 5 · "Keep the problem statement as it is; Lasha and Luka both described the same missed-window problem." · owner GTS. (See `DECISIONS.md`.)



\## My person this week



Luka-1, the CS student I interviewed on 19 October (`01-discovery/interview-logs/` — my log from that day). What I keep coming back to is that he did not need a better course list; he needed to be told the window was open. That is the hypothesis the whole product is built on, and it is why the north star is the sign-up page and not the share.

