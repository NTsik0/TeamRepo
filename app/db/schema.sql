-- Run once in the Neon SQL Editor (Neon console > SQL Editor > paste > Run).

create table if not exists courses (
  id              serial primary key,
  title           text        not null,
  provider        text        not null,              -- e.g. TBC, Coursera, RiHEI, EPAM
  hours_total     int,                               -- total hours, as the provider states it
  has_certificate boolean     not null default false,
  opens_at        date        not null,              -- the day registration opened
  closes_at       date        not null,              -- the last day you can still register
  signup_url      text        not null check (signup_url ~ '^https?://'),
  added_at        timestamptz not null default now() -- when the team added it; drives the "New" label
);

create table if not exists signup_clicks (
  id          serial primary key,
  course_id   int         not null references courses(id),
  student_id  text        not null,                  -- anonymous id made up on the student's phone
  clicked_at  timestamptz not null default now()
);

-- Adding a course (one per real course, checked on the provider's own site first).
-- Copy, fill in, run. A course stops showing by itself the day after closes_at.
--
-- insert into courses (title, provider, hours_total, has_certificate, opens_at, closes_at, signup_url)
-- values ('<course title>', '<provider>', <hours>, <true|false>, '<YYYY-MM-DD>', '<YYYY-MM-DD>', '<https://... sign-up page>');

-- Reconcile check (compare with the PostHog count of student_opens_signup_page, same 7 days):
-- select count(*) from signup_clicks where clicked_at > now() - interval '7 days';
