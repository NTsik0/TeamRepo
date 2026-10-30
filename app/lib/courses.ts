import { sql } from "./db";

export type OpenCourse = {
  id: number;
  title: string;
  provider: string;
  hours_total: number | null;
  has_certificate: boolean;
  closes_at: string; // YYYY-MM-DD
  signup_url: string;
  added_at: string; // ISO timestamp
  days_until_close: number;
  days_since_opened: number;
};

// "Today" is the date in Georgia, so a course closing today still shows until midnight Tbilisi time.
const TODAY = `(now() at time zone 'Asia/Tbilisi')::date`;

const OPEN_COURSES = `
  select id, title, provider, hours_total, has_certificate,
         to_char(closes_at, 'YYYY-MM-DD') as closes_at,
         signup_url, added_at,
         (closes_at - ${TODAY})::int as days_until_close,
         (${TODAY} - opens_at)::int  as days_since_opened
    from courses
   where closes_at >= ${TODAY}
     and opens_at  <= ${TODAY}`;

function toCourse(r: Record<string, unknown>): OpenCourse {
  return {
    id: Number(r.id),
    title: String(r.title),
    provider: String(r.provider),
    hours_total: r.hours_total == null ? null : Number(r.hours_total),
    has_certificate: Boolean(r.has_certificate),
    closes_at: String(r.closes_at),
    signup_url: String(r.signup_url),
    added_at: new Date(r.added_at as string).toISOString(),
    days_until_close: Number(r.days_until_close),
    days_since_opened: Number(r.days_since_opened),
  };
}

/** Every course with registration open today, newest first. */
export async function getOpenCourses(): Promise<OpenCourse[]> {
  const rows = await sql().query(`${OPEN_COURSES} order by opens_at desc, added_at desc`);
  return (rows as Record<string, unknown>[]).map(toCourse);
}

/** One course, only if its registration is open today. */
export async function getOpenCourse(id: number): Promise<OpenCourse | null> {
  const rows = await sql().query(`${OPEN_COURSES} and id = $1`, [id]);
  const r = (rows as Record<string, unknown>[])[0];
  return r ? toCourse(r) : null;
}
