"use client"

import Image from "next/image"
import Link from "next/link"
import { FaEye, FaRegCommentAlt, FaUser } from "react-icons/fa"

import { Article } from "./data"

interface ArticleListProps {

  articles: Article[]
  loading: boolean

}

export default function ArticleList({ articles, loading }: ArticleListProps) {

  if (loading) { return <p className="col-span-full text-center text-slate-500">در حال بارگذاری...</p> }

  if (articles.length === 0) { return <p className="col-span-full text-center text-slate-500">مقاله ای یافت نشد.</p> }


  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
      {articles.map((item) => (
        <div key={item.id} className="article-theme">
          <article className="border border-slate-200 rounded-md shadow-sm w-full cursor-pointer overflow-hidden">
            <div className="relative h-48 w-full">
               <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 h-28">
              <Link href={`/blogs/${item.slug}`}>
                <h3 className="mb-3 text-slate-900 text-sm font-bold hover:text-violet-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </Link>
            </div>

            <footer className="p-5 border-t border-slate-200 flex justify-between items-center">
              <section className="flex space-x-4 space-x-reverse">
                <div className="flex items-center text-sm text-slate-700 gap-1">
                  <span className="text-slate-300"><FaEye /></span>
                  <p>{item.views}</p>
                </div>
                <div className="flex items-center text-sm text-slate-700 gap-1">
                  <span className="text-slate-300"><FaRegCommentAlt /></span>
                  <p>{item.comments}</p>
                </div>
              </section>

              <section className="flex items-center gap-1">
                <span className="text-sky-300"><FaUser /></span>
                <p className="text-sky-500 text-xs font-light">{item.writer}</p>
              </section>
            </footer>
          </article>
        </div>
      ))}
    </div>
  )
}
