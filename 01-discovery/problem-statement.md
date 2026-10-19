# Problem Statement

Built from `synthesis/patterns-analysis.md`, strongest pattern (Pattern 4, explained by Pattern 3). Every sentence ends with the logs that support it.

## The statement

1. **Who:** University students in their 2nd year or later who take free courses from providers like TBC on top of their degree to go deeper or get job-ready, like Cotne, a third-year computer science student who looked for a free C# course for two years. (01, 03, 05, 07)
2. **When:** The moment registration for a free course opens, which they only learn about when a friend passes it on or when they happen to re-check a provider's site. (03, 04, 05, 07, 08, 09)
3. **Cost:** Six of nine students named a free course they missed or heard about too late (Do IT, TBC courses, TBC Risk Academy, a course advertised by a QR code in the dorm elevator, courses the university advertised), one spent about two years looking for a free C# course, and the courses they did take cost 100 to more than 200 hours each. (03, 05, 06, 07, 08, 09)
4. **Today:** They rely on friends to forward links, check providers' sites like the TBC Academy website "frequently" or "daily", and search LinkedIn, GITA and Google, where paid courses show up first or nothing fits. (01, 03, 04, 06, 07, 09)
5. **Why it fails:** No one place tells them when registration opens or closes, so even a student who checks often misses some: "I found out that there courses were online from my friend but it was a day late so I missed an oportunity" (03); "found from their website, but it was showing registration no more active" (06); "while I checked their website time was already past registration" (07); "I missed some courses that uni was sending ads of because it was late." (09)

## What the evidence ruled out

We walked in believing students lose a semester waiting because KIU does not teach a skill when they need it. 0 of 9 raised it in their own words; when reasons were listed, 1 of 9 chose "the university did not teach it then" among four others (07), and 1 of 9 agreed only when we asked directly (02). See line 2 of `DECISIONS.md`.

## What is still open

How long registration windows are, and how exactly students found out too late. No log records this; three students said finding a course was hard before we asked (01, 05, 07), but none said how long registration stayed open. It is the first question for log 10 onward and the riskiest assumption in `02-design/prototype-plan.md`.

## Pattern behind it

- Pattern: More than half the students have already missed a free course because they heard about it too late or could not act in time. (03, 05, 06, 07, 08, 09)
- Root cause: Free courses open on each provider's own schedule, and students only learn about them when someone happens to pass them on, so some arrive after registration closes.
