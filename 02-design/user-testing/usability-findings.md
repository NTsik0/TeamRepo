# Usability Findings

One block per session, written within an hour of running it, in the order we ran them. Behavior timed, quotes verbatim, verdict against the rule in `02-design/user-testing/test-plan.md`, written before anyone discusses the session.

**Deviation from protocol:** Nino used our phone instead of her own.

**Prototype:** the live app at https://team-repo-whfx.vercel.app (our prototype track, `DECISIONS.md` Wk6). On test day the list held one course (TBC IT Academy, iOS Development), so failure behavior 4 ("scrolls past every course") could not really happen.

**Timing source:** PostHog event timestamps, 17 November 2026, Tbilisi time (UTC+4). Times are measured from the tester's first page view, not from the last word of the task, so they slightly undercount. `student_opens_signup_page` is fired by the server when "Go to sign-up" is tapped.

## Session 1 · Beka · KIU student · his own phone · ran and logged NTS

**Task read:** "A friend just told you free courses opened this week. Show me what you would do here."

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (20:23:05) | | |
| 0:01 | tapped "iOS Development", course card opened | | predicted first mistake (looks for a search box): no |
| 0:03 | tapped "Go to sign-up" | | |
| 0:04 | sign-up page opened (20:23:09) | | one action complete |
| 0:22 | came back to the list (20:23:27) | | unprompted |

**Time to first tap:** 0:01
**Time to the one action (opens a course's sign-up page):** 0:04
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):**
**Answer to "what were you expecting to happen?":** "საინტერესოა, სტუდენტებისთვის ოქროს საბადოსავითაა. ბევრი კურსი ერთ ადგილას მაგარი იდეაა და რომ გამოუშვებთ გამოვიყენებ. ინფორმაცია ბევრი რომ იყოს აჯობებდა ჯერ ცოტაა მაგრამ რაც არის კარგია." (In English: "It's interesting, it's like a gold mine for students. Many courses in one place is a great idea, and when you release it I'll use it. It would be better with a lot more information; there's little for now, but what there is is good.") From NTS's notes.

PostHog person: `62085ef9`.

## Session 2 · Nino-CS · 3rd-year computer science student · NTS's second phone, borrowed (hers was not at hand) · ran and logged NTS

**Task read:** same, word for word.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (20:23:37) | | |
| 0:01 | tapped "iOS Development", course card opened | | predicted first mistake (looks for a search box): no |
| 0:02 | tapped "Go to sign-up", sign-up page opened (20:23:39) | | one action complete |
| after | | "it would be greater to be able to sort using info like java, c, Swift, computer languages we are interested in and also a possibility to choose and list of courses that are giving certificates at the end" | said by Nino and Gio together after their sessions, relayed by NTS, not written live |

**Time to first tap:** 0:01
**Time to the one action (opens a course's sign-up page):** 0:02
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):** asked for courses that give a certificate at the end. No interview named certificates.
**Answer to "what were you expecting to happen?":** "ველოდებოდი ბევრ კურსს ერთ ადგილას რომ ამერჩია იმის მიხედვით რა განხრაც მინდა. კარგია ჯერჯერობით რაც არის. ინფორმაციაა დასამატებელი." (In English: "I was waiting for many courses in one place, to choose by the direction I want. What there is so far is good. Information needs to be added.")

PostHog person: `b20bd12d`.

## Session 3 · Gio · KIU student · his own phone · ran and logged NTS

**Task read:** same, word for word.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (20:29:30, matched by time, check in PostHog) | | |
| | asked questions about the project during the task | | about the project, not what to press, so not failure behavior 3 |
| 0:50 | sign-up page opened (20:30:19) | | one action complete |
| 2:27 | came back, opened the sign-up page again (20:31:57 to 20:32:06, 9 seconds) | | unprompted |
| after | | sort by language and certificates (same comment as session 2) | relayed by NTS |

**Time to first tap:**
**Time to the one action (opens a course's sign-up page):** 0:50
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen. His questions during the task were about the project, not about what to press.
**Surprise (something no interview told us):** he expected the button to lead to an ad page first, and was pleased it went straight to the real sign-up page.
**Answer to "what were you expecting to happen?":** a fake ad page before the real sign-up page; it went straight there with no ads and no wasted time (relayed by NTS, not word for word).

PostHog person: `039a4876`.

## After 3 sessions: apply the decision rule

**Sessions run:** 3 · **Fails:** 0 · **Rule says:** keep going (the rule changes course only at 3 or more fails out of 5)

**Not counted:** `fe932f7a` was our own phone. `2419ebf2` (20:29:59 to 20:30:01) was a repeat visit by Beka or Gio, not a separate tester.

**What to watch:** two of three testers asked for a way to filter by programming language and by whether the course gives a certificate. The search box is on our cut list (`03-build/mvp-boundary.md`); a filter is a close cousin. That is one request from two people, not yet a pattern. Retest when the list holds more than one course.
