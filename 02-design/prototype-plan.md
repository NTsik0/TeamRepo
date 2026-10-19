# Prototype Plan

Built from `01-discovery/problem-statement.md`. We build it in Lab 5.

## 1. The riskiest assumption

> We assume that a student who is told a free course has just opened registration will open its sign-up page that same day, instead of waiting for a friend to pass it on or re-checking the provider's site later.

**Why this one is riskiest:** Today courses reach students through friends and repeated checking (01, 02, 03, 04, 05, 07), and 4 of 7 have missed one because they heard too late (03, 05, 06, 07). If students do not act on an "opened today" notice from us, faster news changes nothing. No log tests this yet, which is why the prototype must.

## 2. The one action

> A student can see that a free course has opened registration and open its sign-up page.

## 3. Fidelity

| Choice | Why it is the cheapest thing that can kill the assumption | Tool | Time we will spend |
|---|---|---|---|
| Clickable, phone-sized page | The assumption is about whether a student taps into a course from a list on their own phone. Paper cannot show a real sign-up link; code adds accounts and data the test does not need. | An AI prototyping tool, shared as a link that opens on a phone | One evening |

## 4. Screens, each traced to evidence

| Screen | What the tester does on it | The log or problem-statement sentence that earns it |
|---|---|---|
| 1. "Registration open now" list (TBC, Coursera, Erasmus+ / RiHEI), newest first, with closing date | Sees which courses opened and picks one | Students hear through friends and re-checking (03, 04, 05, 07) and missed courses (03, 05, 06, 07); problem statement sentences 2 and 5 |
| 2. Course card: provider, closing date, total hours, free, certificate | Reads it and decides | Cost is hours, not money (01 to 05); certificates mattered (03, 04) |
| 3. Sign-up | Taps through to the provider's sign-up page | The one action, section 2 |

**Will not appear, even if a tool generates it:** ratings and reviews, AI course recommendations, user accounts or profiles, payments, chat, a certificate wallet, paid courses. No log asked for any of them.

## 5. The test that can fail

- **Task, read aloud to the tester, word for word:** "A friend just told you free courses opened this week. Show me what you would do here."
- **Success looks like:** the tester opens one course's sign-up page within 90 seconds, without asking us anything.
- **Failure looks like:** they leave the page to check the provider's own site or search Google; they say they would ask the friend first; they ask us what to press; they scroll past every course without opening one.
- **Decision rule:** if 3 or more of 5 testers fail, the assumption is weakened, and we test a version where the same notice arrives as a message forwarded in a student group chat, the way friends send links today (04), before building anything else.
- **Our prediction of the first thing a tester gets wrong:** they look for a search box instead of scrolling the list.

## 6. Five testers

| Code name | From log, or new | Who on the team books them |
|---|---|---|
| Temuri | log 05 | NTS |
| Nino-CS | log 03 | NTS |
| Nini | new | GTS |
| Gio | new | GTS |
| Giorgi | new, introduced in log 03 | NTS |
