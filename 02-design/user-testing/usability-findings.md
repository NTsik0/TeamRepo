# Usability Findings

One block per session, in the order we ran them. Behavior timed, quotes verbatim, verdict against the rule in `02-design/user-testing/test-plan.md`.

**Round:** 20 November 2026. An earlier informal round on 17 November (one course on the list, borrowed devices, no live logger) is in this file's git history; we do not count it.

**Prototype:** the live app at https://team-repo-whfx.vercel.app (our prototype track, `DECISIONS.md` Wk6). On test day the list held three open courses: CS50x (Harvard / edX, id 2), Data Analytics & Quality Engineering (EPAM Campus, id 3) and Modern SAP Development (EPAM Campus, id 4).

**Tester names:** nicknames we call them by, not real names (see `test-plan.md`).

**How we ran it:** each tester was on a Discord video call with NTS, sharing their screen, on their own device. NTS read the task word for word and did not help. Nini and Gaga were on the same call at the same time, so they heard the task together and could see each other.

**Timing source:** PostHog event timestamps, Tbilisi time (UTC+4). Times are measured from the tester's first page view, not from the last word of the task, so they slightly undercount. `student_opens_signup_page` is fired by the server when "Go to sign-up" is tapped. Answers were given in Georgian; the English is our translation.

## Session 1 · Nini · KIU student · her own iPhone · Discord screen share, with Gaga · ran NTS; on this joint call NTS and GTS each logged one of the two testers

**Task read:** "A friend just told you free courses opened this week. Show me what you would do here."

**Second look:** Nini had seen the app on 17 November, when it listed one course.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (17:56:46) | | |
| | opened the card for course 3 (Data Analytics & QE, EPAM Campus) | | predicted first mistake (looks for a search box): no |
| 0:24 | tapped "Go to sign-up", sign-up page opened (17:57:10) | | one action complete |

**Time to the one action (opens a course's sign-up page):** 0:24
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):** she says she will register for the EPAM course.
**Answer to "what were you expecting to happen?":** "წინაზე როგორც გითხარი ისევ ის მაგრამ ახლა უფრო ბევრი კურსი დავინახე და კარგია. ფილტრი მაგარი იქნებოდა ბევრი რომ იქნება და ისე კარგია. ეპამის კურსი კარგი ჩანს დავრეგისტრირდები." ("Same as I told you last time, but now I saw more courses and it's good. A filter would be great once there are many, and otherwise it's good. The EPAM course looks good, I'll register.")

PostHog person: `d5739a56`.

## Session 2 · Gaga · KIU student · his own Windows PC (protocol says phone) · Discord screen share, with Nini · ran NTS; on this joint call NTS and GTS each logged one of the two testers

**Task read:** same, word for word.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (17:56:32) | | |
| 0:36 | opened the card for course 3 (Data Analytics & QE, EPAM Campus) (17:57:08) | | predicted first mistake (looks for a search box): no |
| 0:38 | tapped "Go to sign-up", sign-up page opened (17:57:10) | | one action complete |
| later | opened the card for course 4 (Modern SAP Development, EPAM Campus) | | unprompted; the course he says he will take |

**Time to the one action (opens a course's sign-up page):** 0:38
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):** he valued that there are no ads before the real sign-up page.
**Answer to "what were you expecting to happen?":** "ვა, მაგარია. კურსებს ველოდი და კურსები დამხვდა კარგი რამეა. და რეკლამებიც არარის მაგარია. ლინკიც კარგად მუშაობს ძებნა არ გიწევს. დიდი ალბათობით Modern SAP Development-ის კურსს ავიღებ. მოვიფიქრებ 17ამდე." ("Wow, that's great. I was expecting courses and found courses, a good thing. And there are no ads, that's great. The link works well too, you don't have to search. Most likely I'll take the Modern SAP Development course. I'll think about it until the 17th.")

PostHog person: `367f47e7`.

## Session 3 · BeKa · KIU student · his own Android phone · Discord screen share, alone · ran and logged NTS

**Task read:** same, word for word.

**Second look:** BeKa had seen the app on 17 November, when it listed one course.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (18:19:57) | | |
| | opened the card for course 3 (Data Analytics & QE, EPAM Campus) | "Will it crash? Huh. Will the ad pop up?" | unprompted; predicted first mistake (looks for a search box): no |
| 0:33 | tapped "Go to sign-up", sign-up page opened (18:20:30) | "Wow, cool, it works the best way." | one action complete; quotes as NTS noted them, in English |
| 0:36 | came back to the list (18:20:33) | | unprompted |

**Time to the one action (opens a course's sign-up page):** 0:33
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):** he expected a student-made app to crash.
**Answer to "what were you expecting to happen?":** "ველოდი რომ დაიქრაშებოდა მაგრამ მუშაობს ;დ კარგია. რედირექთინგ მოხდა. მაგარია. ბევრი წვალების გარეშე ერთ ადგილასაა ყველაფერი" ("I expected it to crash, but it works ;D It's good. The redirect happened. Great. Everything is in one place without much hassle.")

PostHog person: `698a2bbe`.

## Session 4 · Anushki · KIU student who looks for free courses · her own Android phone · Discord screen share, alone · ran and logged NTS

**Task read:** same, word for word.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (18:35:14) | | |
| | opened the card for course 3 (Data Analytics & QE, EPAM Campus) | "დასერჩვა იქნებოდა კარგი რაცმინდა მარტივად რომ ვნახო." ("Searching would be good, so I could easily find what I want.") | predicted first mistake (looks for a search box): she wished for search, but scrolled the list and did not get stuck |
| 0:36 | tapped "Go to sign-up", sign-up page opened (18:35:50) | | one action complete |

**Time to the one action (opens a course's sign-up page):** 0:36
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):** she will wait for new courses, so she treats the list as something to come back to.
**Answer to "what were you expecting to happen?":** "მაგარია. კურსები ერთ ადგილას კაი იდეაა. პირდაპირ გადამიყვანა და აღარ მომიწია ტყუილად დროის დახარჯვა. დაველოდები ახალ კურსებს ავიღებ თუ მომეწონა" ("Great. Courses in one place is a good idea. It took me straight there and I didn't have to waste time for nothing. I'll wait for new courses, and I'll take one if I like it.")

PostHog person: `7357863b`.

## Session 5 · Leo · KIU student who looks for free courses · his own Android phone · Discord screen share, alone · ran and logged NTS

**Task read:** same, word for word.

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | page opened (18:51:01) | | |
| | opened the card for course 4 (Modern SAP Development, EPAM Campus) | | predicted first mistake (looks for a search box): no |
| 0:19 | tapped "Go to sign-up", sign-up page opened (18:51:20) | | one action complete |

**Time to the one action (opens a course's sign-up page):** 0:19
**Result vs rule:** PASS: opened a sign-up page within 90 seconds, no failure behavior seen.
**Surprise (something no interview told us):** he sees the list as the way to stop missing one provider's courses.
**Answer to "what were you expecting to happen?":** "კაი რამეა. ეპამის კურსები აღარ გამომეპარება. ეპამის კურსზე გადამიყვანა პირდაპირ სარეგისტრაციო და საინფორმაციო ველზე. ეპამზე დარეგისტრირდებოდა ისე კაცი. გადავხედავ" ("It's a good thing. I won't miss EPAM courses anymore. It took me straight to the EPAM course's registration and information page. This way a person would register at EPAM. I'll take a look.")

PostHog person: `04ec664c`.

## After 5 sessions: apply the decision rule

**Sessions run:** 5 · **Fails:** 0 · **Rule says:** keep going; the assumption holds (the rule changes course only at 3 or more fails out of 5)

**Times to the sign-up page:** 0:19, 0:24, 0:33, 0:36, 0:38. All under the 90-second limit.

**What this round shows, and what it does not:** it supports steps 1 to 3 of the journey (open the list, open a card, reach the provider's sign-up page), which is where the value hypothesis is tested. It does not test steps 4 and 5. Nobody was asked to share, and the only return was BeKa going back to the list 3 seconds after the sign-up page, not a return days later. Retention ("New" label, `student_returns_to_course_list`) is still unvalidated and needs its own follow-up.

**Not counted:** `fe932f7a` (NTS's PC, 17:36:57, our own test of the new list).

**What we heard more than once:**
- Everything "in one place": Nini, Gaga, BeKa, Anushki (4 of 5).
- Straight to the real sign-up page, no ads or wasted time: Gaga, BeKa, Anushki, Leo (4 of 5).
- Two testers (Nini, Gaga) said they will register for a course from the list; Leo will look at the EPAM course; Anushki will wait for new ones.
- Search or a filter: Nini ("once there are many") and Anushki ("so I could easily find what I want"), 2 of 5. Our predicted first mistake (looking for a search box instead of scrolling) did not happen: nobody got stuck, all five scrolled the three-course list. The search box stays on our cut list (`03-build/mvp-boundary.md`) until the list is longer than one phone screen.

**What we would do differently:** Nini and Gaga took the test together on one call; next time, one tester per call. Gaga used a PC, not a phone. Nini and BeKa had already seen the one-course version on 17 November, so they were not first-time users. Our plan has one person asking and another writing; GTS logged one tester on the joint call, and NTS ran and logged every other session alone.
