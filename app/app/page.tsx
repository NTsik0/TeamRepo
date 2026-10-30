import { connection } from "next/server";
import { getOpenCourses } from "@/lib/courses";
import { CourseList } from "./course-list";

const SOURCES = ["groupchat", "friend", "qr", "other"] as const;

export default async function Home({ searchParams }: PageProps<"/">) {
  await connection(); // always read the courses fresh, never a cached copy
  const { src } = await searchParams;
  const source = SOURCES.find((s) => s === src) ?? "other";
  const courses = await getOpenCourses();

  return (
    <main className="page">
      <header className="header">
        <h1>Free courses, registration open now</h1>
        <p className="lead">Every free course you can still sign up for today, newest first. Tap one to see hours and certificate.</p>
      </header>
      <CourseList courses={courses} source={source} />
    </main>
  );
}
