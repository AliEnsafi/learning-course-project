import { notFound } from "next/navigation"

import { articleData } from "../data"
import SingleBlogTheme from "./singleBlogTheme"
import { Navbar , Footer } from "@/components/homePageImport"

import MainCarousel from "@/components/main/carousel/mainCarousel"


export default async function SingleBlogPage({params} : {params : Promise<{ slug: any }>} ) {

    const { slug } = await params;
    const blog = articleData.find((b) => b.slug === slug)

    if (!blog) { notFound() }

  return (
    <>
    <Navbar />

    <MainCarousel />

    <SingleBlogTheme blog={blog} />

    <Footer />
    </>
  )
}
