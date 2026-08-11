import { notFound } from "next/navigation"

import { supabase } from "@/lib/supabase"
import { BlogDetail } from "@/types/blog.types"

import SingleBlogTheme from "./singleBlogTheme"
import ArticleSidebar from "@/components/main/sidebar/ArticleSidebar"
import MainCarousel from "@/components/main/carousel/mainCarousel"
import { Navbar, Footer } from "@/components/homePageImport"

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !blog) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <MainCarousel />

      <div className="my-36 w-full px-10">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">

          <SingleBlogTheme blog={blog as BlogDetail} />
          <ArticleSidebar currentSlug={slug} />

        </div>
      </div>

      <Footer />
    </>
  )
}
