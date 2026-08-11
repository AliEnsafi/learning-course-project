import { getLatestArticles, getLatestCourses } from "@/lib/sidebar-data"
import LatestArticlesSection from "@/components/main/sidebar/LatestArticlesSection"
import LatestCoursesSection from "@/components/main/sidebar/LatestCoursesSection"

interface ArticleSidebarProps {
  currentSlug: string
}

export default async function ArticleSidebar({ currentSlug }: ArticleSidebarProps) {
  const [articles, courses] = await Promise.all([
    getLatestArticles(currentSlug),
    getLatestCourses(),
  ])

  if (articles.length === 0 && courses.length === 0) {
    return null
  }

  return (
    <aside className="w-full lg:sticky lg:top-24 lg:self-start lg:w-2xs lg:shrink-0">
      <div className="space-y-6">
        <LatestArticlesSection articles={articles} />
        <LatestCoursesSection courses={courses} />
      </div>
    </aside>
  )
}
