import { FaBookOpen } from "react-icons/fa"

import { SidebarArticle } from "@/types/blog.types"
import {
  RecentArticleItem,
  SidebarSectionHeader,
  ViewAllLink,
} from "@/components/main/sidebar/SidebarPrimitives"

export default function LatestArticlesSection({ articles }: { articles: SidebarArticle[] }) {
  if (articles.length === 0) return null

  return (
    <section
      aria-labelledby="sidebar-latest-articles"
      className="rounded-md border border-slate-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
    >
      <SidebarSectionHeader
        id="sidebar-latest-articles"
        title="۵ مقاله اخیر"
        subtitle="جدیدترین مقالات منتشرشده"
        icon={<FaBookOpen />}
      />
      <ul className="space-y-3">
        {articles.map((article) => (
          <RecentArticleItem key={article.id} article={article} />
        ))}
      </ul>
      <ViewAllLink href="/blogs" label="مشاهده همه مقالات" />
    </section>
  )
}
