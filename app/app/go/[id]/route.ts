import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { getOpenCourse } from "@/lib/courses";
import { posthog } from "@/lib/posthog";

// Step 3 of the journey: Sandro taps "Go to sign-up".
// Write the click, fire the north star event, then send him to the provider's page.
export async function GET(request: Request, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;
  const courseId = Number.parseInt(id, 10);
  const home = new URL("/", request.url);

  if (!Number.isInteger(courseId) || courseId <= 0) return NextResponse.redirect(home);

  const course = await getOpenCourse(courseId);
  // Closed or unknown course: back to the list, no row, no event.
  if (!course) return NextResponse.redirect(home);

  const sid = new URL(request.url).searchParams.get("sid") ?? "";
  const studentId = /^[A-Za-z0-9-]{8,64}$/.test(sid) ? sid : "unknown";

  await sql().query(`insert into signup_clicks (course_id, student_id) values ($1, $2)`, [course.id, studentId]);

  try {
    posthog.capture({
      distinctId: studentId,
      event: "student_opens_signup_page",
      properties: {
        student_id: studentId,
        course_id: course.id,
        provider: course.provider,
        days_until_close: course.days_until_close,
        days_since_opened: course.days_since_opened,
      },
    });
    await posthog.flush(); // without this the function can end before the event leaves
  } catch (err) {
    // Analytics must never block the student from reaching the sign-up page.
    console.error("posthog capture failed", err);
  }

  return NextResponse.redirect(course.signup_url, 302);
}
