
import Image from "next/image"

import { BlogDetail } from "@/types/blog.types"
import BlogDesc from "./blogDesc"
import BlogShare from "./blogShare"

interface SingleBlogThemeProps {
  blog: BlogDetail
}


const SingleBlogTheme = ({ blog }: SingleBlogThemeProps) => {
  const { title, imageUrl } = blog

  return (
    <article className="min-w-0 flex-1 space-y-10 rounded-md border border-slate-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900 sm:p-8 lg:p-10">
      <div className="blog-item flex-col space-y-10">
        <div className="blog-title">
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
        </div>
        <div className="blog-img overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={250}
            className="object-cover"
            priority
          />
        </div>
        <BlogDesc />
      </div>

      <div className="blog-comments flex-col space-y-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 lg:text-2xl">نظرات</h2>
        </div>
        <form className="mb-6">
          <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              نظر شما
            </label>
            <textarea
              id="comment"
              rows={6}
              className="w-full border-0 bg-transparent px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:text-gray-100"
              placeholder="نظر خود را اینجا وارد کنید..."
              required
            />
          </div>

          <div className="nav-course-btn w-20 cursor-pointer rounded-md bg-violet-700 px-5 py-2 text-center text-white transition-colors hover:bg-violet-800">
            <button type="submit" className="cursor-pointer">
              ارسال
            </button>
          </div>
        </form>
      </div>

      <BlogShare />

    </article>
  )
}

export default SingleBlogTheme
