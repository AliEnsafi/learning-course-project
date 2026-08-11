import Link from "next/link"
import type { ReactNode } from "react"
import { FaAngleLeft, FaUser } from "react-icons/fa"

import PersianNumber from "@/components/persianNumber"
import { SidebarArticle } from "@/types/blog.types"
import { SidebarCourse } from "@/types/courses.types"

export function SidebarSectionHeader({
  id,
  title,
  subtitle,
  icon,
}: {
  id: string
  title: string
  subtitle: string
  icon: ReactNode
}) {
  return (
    <header className="mb-4 space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-violet-600 dark:text-violet-400" aria-hidden="true">
          {icon}
        </span>
        <h2 id={id} className="text-base font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
    </header>
  )
}

export function RecentArticleItem({ article }: { article: SidebarArticle }) {
  return (
    <li>
      <Link
        href={`/blogs/${article.slug}`}
        className="group relative block overflow-hidden rounded-md border border-slate-200 bg-violet-50 p-3.5 pe-4 transition-colors hover:border-violet-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-violet-500 dark:hover:bg-gray-800/80"
      >
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-violet-700 dark:text-slate-100 dark:group-hover:text-violet-400 px-1">
          {article.title}
        </h3>
        {article.writer ? (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <FaUser className="text-sky-300" aria-hidden="true" />
            <span>{article.writer}</span>
          </div>
        ) : null}
      </Link>
    </li>
  )
}

export function RecentCourseItem({ course }: { course: SidebarCourse }) {
  return (
    <li>
      <Link
        href={`/courses/${course.slug}`}
        className="group relative block overflow-hidden rounded-md border border-slate-200 bg-violet-50 p-3.5 pe-4 transition-colors hover:border-violet-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-violet-500 dark:hover:bg-gray-800/80"
      >
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-violet-700 dark:text-slate-100 dark:group-hover:text-violet-400">
          {course.title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
          {course.author ? (
            <span className="inline-flex items-center gap-1.5">
              <FaUser className="text-sky-300" aria-hidden="true" />
              <span>{course.author}</span>
            </span>
          ) : null}
          {course.author && course.pricedisplay ? (
            <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
              |
            </span>
          ) : null}
          {course.pricedisplay ? (
            <span className="text-violet-700 dark:text-violet-400">
              <PersianNumber>{course.pricedisplay}</PersianNumber>
            </span>
          ) : null}
        </div>
      </Link>
    </li>
  )
}

export function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mt-4 flex w-full items-center justify-center gap-1 rounded-md border border-violet-700 bg-white px-3 py-2 text-sm text-violet-700 transition-colors hover:bg-violet-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-violet-500 dark:bg-gray-800 dark:text-violet-300 dark:hover:bg-violet-600 dark:hover:text-white"
    >
      <span>{label}</span>
      <FaAngleLeft aria-hidden="true" />
    </Link>
  )
}
