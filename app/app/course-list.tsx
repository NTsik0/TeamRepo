"use client";

import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";
import type { OpenCourse } from "@/lib/courses";

const ID_KEY = "ms_student_id";
const LAST_VISIT_KEY = "ms_last_visit";

// Browser storage can be missing or throw (private mode, blocked site data); the page works without it.
function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function getStudentId(): string {
  const existing = read(ID_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  write(ID_KEY, id);
  return id;
}

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function closesText(days: number, date: string): string {
  const when = new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  if (days === 0) return `Closes today (${when})`;
  if (days === 1) return `Closes tomorrow (${when})`;
  return `Closes in ${days} days (${when})`;
}

export function CourseList({ courses, source }: { courses: OpenCourse[]; source: string }) {
  // Known only in the browser (it lives in local storage), so it is filled in after the first render.
  const [visit, setVisit] = useState<{ studentId: string; newIds: Set<number> }>({ studentId: "", newIds: new Set() });
  const { studentId, newIds } = visit;
  const [openId, setOpenId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const tracked = useRef(false);

  // Steps 1 and 5: page opened, and (if this phone has been here before) what is new since then.
  useEffect(() => {
    if (tracked.current) return; // once per load, also under React's double effects in dev
    tracked.current = true;

    const id = getStudentId();
    posthog.identify(id);
    let fresh: OpenCourse[] = [];

    const lastVisit = read(LAST_VISIT_KEY);
    posthog.capture("student_opens_course_list", {
      student_id: id,
      source,
      open_course_count: courses.length,
    });

    if (lastVisit) {
      const last = new Date(lastVisit).getTime();
      fresh = courses.filter((c) => new Date(c.added_at).getTime() > last);
      posthog.capture("student_returns_to_course_list", {
        student_id: id,
        days_since_last_visit: Math.floor((Date.now() - last) / 86_400_000),
        new_since_last_visit: fresh.length,
      });
    }
    write(LAST_VISIT_KEY, new Date().toISOString());
    // Syncing from local storage, which only exists in the browser; one update, once per load.
    setVisit({ studentId: id, newIds: new Set(fresh.map((c) => c.id)) });
  }, [courses, source]);

  // Step 2: open a course card.
  function toggle(course: OpenCourse) {
    if (openId === course.id) {
      setOpenId(null);
      return;
    }
    setOpenId(course.id);
    posthog.capture("student_opens_course_card", {
      student_id: studentId,
      course_id: course.id,
      provider: course.provider,
      days_until_close: course.days_until_close,
    });
  }

  // Step 4: share with a friend. Fires only after the share or copy succeeded.
  async function share(course: OpenCourse) {
    const url = `${window.location.origin}/?src=friend`;
    const text = `${course.title} (${course.provider}) is free and registration is open: ${closesText(course.days_until_close, course.closes_at).toLowerCase()}.`;
    let channel: "share_sheet" | "copy_link" | null = null;

    if (navigator.share) {
      try {
        await navigator.share({ title: course.title, text, url });
        channel = "share_sheet";
      } catch {
        return; // cancelled: no event
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        channel = "copy_link";
        setCopiedId(course.id);
        setTimeout(() => setCopiedId(null), 2500);
      } catch {
        return;
      }
    }

    posthog.capture("student_shares_course", {
      student_id: studentId,
      course_id: course.id,
      channel,
    });
  }

  if (courses.length === 0) {
    return <p className="empty">No free course has registration open right now. Check back soon.</p>;
  }

  return (
    <ul className="list">
      {courses.map((c) => {
        const isOpen = openId === c.id;
        const urgent = c.days_until_close <= 2;
        return (
          <li key={c.id} className={`course${isOpen ? " open" : ""}`}>
            <button className="row" onClick={() => toggle(c)} aria-expanded={isOpen}>
              <span className="provider">
                {c.provider}
                {newIds.has(c.id) && <span className="badge">New</span>}
              </span>
              <span className="title">{c.title}</span>
              <span className={`closes${urgent ? " urgent" : ""}`}>{closesText(c.days_until_close, c.closes_at)}</span>
            </button>

            {isOpen && (
              <div className="card">
                <dl>
                  <div>
                    <dt>Price</dt>
                    <dd>Free</dd>
                  </div>
                  <div>
                    <dt>Total hours</dt>
                    <dd>{c.hours_total ?? "Not stated"}</dd>
                  </div>
                  <div>
                    <dt>Certificate</dt>
                    <dd>{c.has_certificate ? "Yes" : "No"}</dd>
                  </div>
                  <div>
                    <dt>Registration closes</dt>
                    <dd>{formatDate(c.closes_at)}</dd>
                  </div>
                </dl>
                <a className="go" href={`/go/${c.id}${studentId ? `?sid=${studentId}` : ""}`}>
                  Go to sign-up
                </a>
                <button className="share" onClick={() => share(c)}>
                  {copiedId === c.id ? "Link copied" : "Share with a friend"}
                </button>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
