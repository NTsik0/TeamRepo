# MVP Boundary

The smallest complete user journey that tests whether the product creates value. Complete: the person gets the value, start to finish. Smallest: nothing that is not on that path is in Sprint 1.

**Value hypothesis under test:** A student who sees in one place which free courses have registration open right now, with the closing date, will reach the sign-up page before registration closes, instead of hearing about it a day late from a friend (problem statement, sentences 2 and 5; logs 03, 05, 06, 07, 08, 09).

**The one person walking this journey:** Sandro, a KIU computer science student who takes free outside courses on top of his degree (`00-foundation/icp.md`).

## The journey

1. Sandro taps the link a friend posted in his group chat, and the "Registration open now" list loads on his phone
2. Sandro opens one course card and reads the provider, total hours, certificate and "closes in N days"
3. Sandro taps "Go to sign-up" and lands on the provider's own sign-up page while registration is still open
4. Sandro shares that course with a friend from the card
5. Sandro comes back days later and sees the courses that opened since his last visit marked "New"

**Why this is complete:** After step 3 Sandro is on a sign-up page that is still open, which is the moment 6 of 9 students missed (logs 03, 05, 06, 07, 08, 09); steps 4 and 5 test whether that happens again and spreads the way courses spread today, through a friend (8 of 9 logs).

**Why this is smallest:** We considered removing step 2 and linking straight from the list. Students choose by hours and certificate (logs 01 to 05; certificates in 03, 04), so without the card they would leave for the provider's site to check, which is failure behavior 1 in our frozen test.

## Cut list

| Feature | Reason (cite the log, session, or hypothesis) | Comes back when |
|---|---|---|
| Email or Telegram alert when a course opens | The hypothesis is whether a student acts on an "open now" list at all; an alert channel only matters if they do. The decision rule in `02-design/prototype-plan.md` section 5 already names a group-chat message as the next version to test | If 3 of 5 sessions fail, as the decision rule says; otherwise Sprint 2 |
| Search box | Our predicted first mistake is "they look for a search box"; we keep it out so the sessions show whether a short list is enough | If 2 or more sessions show testers stuck looking for search |
| Student accounts and login | Nothing in the journey needs to know who Sandro is; `student_id` is an anonymous id on his phone | When a student asks to save courses across phones |
| Ratings and reviews | 0 of 9 logs asked for them; students trust the friend who sends the course (8 of 9) | When a log asks for them |
| AI course recommendations | 0 of 9 logs; with five to ten courses open at a time there is nothing to recommend between | When the open list is longer than one phone screen |
| Paid courses | Every course students took was free (logs 01 to 07); paid ones were rejected: "where I found it it costed money" (07) | Never, unless the problem changes |
| Automatic scraping of provider sites | The team adds each course by hand in the database; we can type five to ten courses a week, and a scraper per provider tests nothing about the student | When the team adds more than 20 courses a week by hand |
| Certificate wallet | 0 of 9 logs; what students did with certificates is still an open question (`patterns-analysis.md`, Pattern 1, why 3) | After that question is answered in interviews |
| In-app chat | Students already talk in group chats (log 04, decision rule); we are not a messenger | Never |
| Georgian interface | All nine interviewees answered our English form in English; testers are KIU students | If a session tester struggles with the English |

## Step to event

| Step | Event (actor_verb_object) | In the schema? |
|---|---|---|
| 1 | `student_opens_course_list` | yes |
| 2 | `student_opens_course_card` | yes |
| 3 | `student_opens_signup_page` | yes |
| 4 | `student_shares_course` | yes |
| 5 | `student_returns_to_course_list` | yes |

**North star step:** 3
