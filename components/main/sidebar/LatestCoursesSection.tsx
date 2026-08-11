import { FaGraduationCap } from "react-icons/fa"

import { SidebarCourse } from "@/types/courses.types"
import {
  RecentCourseItem,
  SidebarSectionHeader,
  ViewAllLink,
} from "@/components/main/sidebar/SidebarPrimitives"

export default function LatestCoursesSection({ courses }: { courses: SidebarCourse[] }) {
  if (courses.length === 0) return null

  return (
    <section
      aria-labelledby="sidebar-latest-courses"
      className="rounded-md border border-slate-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
    >
      <SidebarSectionHeader
        id="sidebar-latest-courses"
        title="آخرین دوره‌ها"
        subtitle="جدیدترین دوره‌های آموزشی"
        icon={<FaGraduationCap />}
      />
      <ul className="space-y-3">
        {courses.map((course) => (
          <RecentCourseItem key={course.id} course={course} />
        ))}
      </ul>
      <ViewAllLink href="/courses" label="مشاهده همه دوره‌ها" />
    </section>
  )
}
