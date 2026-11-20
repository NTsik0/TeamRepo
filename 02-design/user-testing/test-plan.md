# Prototype Test Plan

The test itself was written in Lab 4 and is frozen. This file adds the people, the schedule, and who runs each session. Sessions are logged in `02-design/user-testing/usability-findings.md`, one block each, as we run them.

**Prototype v1 link:** the first deployed screens of our journey, at the Vercel URL in the Live product row of the README (our prototype track, `DECISIONS.md`). Same link goes in the Prototype row.

**Riskiest assumption under test:** We assume that a student who is told a free course has just opened registration will open its sign-up page that same day, instead of waiting for a friend to pass it on or re-checking the provider's site later.

## The frozen test (copied from `02-design/prototype-plan.md`, section 5, unchanged)

**Task, read aloud word for word:** "A friend just told you free courses opened this week. Show me what you would do here."

**Success:** the tester opens one course's sign-up page within 90 seconds, without asking us anything.

**Failure behaviors:**
1. They leave the page to check the provider's own site or search Google.
2. They say they would ask the friend first.
3. They ask us what to press.
4. They scroll past every course without opening one.

**Decision rule (out of 5):** if 3 or more of 5 testers fail, the assumption is weakened, and we test a version where the same notice arrives as a message forwarded in a student group chat, the way friends send links today (04), before building anything else.

**Predicted first mistake:** they look for a search box instead of scrolling the list.

## Testers

All five from our ICP: KIU students who take free outside courses. None in this course. Code names only: the names below are the nicknames we call them by, not their real names; real names and numbers stay in our Discord.

| # | Code name | Role (as in our ICP) | Why they fit the ICP | Session runner (asks) | Session logger (writes) | Target day | Status (messaged / booked / done) |
|---|---|---|---|---|---|---|---|
| 1 | Nini | KIU student | Searches for and applies to online courses (outreach tracker); same person as Nino-CS in log 03, who re-checked the TBC Academy site and still missed "Do IT" by a day | NTS | NTS or GTS (joint call, one each) | 20 Nov | done (session 1) |
| 2 | Gaga | KIU student | Looks for free courses; was searching for one at the time of the test | NTS | NTS or GTS (joint call, one each) | 20 Nov | done (session 2) |
| 3 | BeKa | KIU student | Takes free outside courses; applied to a TBC IT Academy course in November | NTS | NTS | 20 Nov | done (session 3) |
| 4 | Anushki | KIU student | Looks for free courses | NTS | NTS | 20 Nov | done (session 4) |
| 5 | Leo | KIU student | Looks for free courses | NTS | NTS | 20 Nov | done (session 5) |

At least three rows must be "messaged" or "booked" before this file is final.

## Session protocol (same every time)

1. The tester opens the link on their own phone. Not ours.
2. The runner reads the task word for word, then says nothing.
3. The logger starts the timer on the last word of the task and writes: time to first tap, time to the one action, every unprompted sentence verbatim.
4. When the tester stops, or at 3 minutes, the runner asks one question only: "What were you expecting to happen?"
5. The logger writes the verdict against the rule before anyone discusses the session.
