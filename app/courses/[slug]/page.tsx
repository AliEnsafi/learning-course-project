import { notFound } from "next/navigation"

import { courseCard } from "../components/course-items/cards/data"

import { Navbar , Footer } from "@/components/homePageImport"
import MainCarousel from "@/components/main/carousel/mainCarousel"
import SingleCourseTheme from "../components/single-course/singleCourseTheme"

export default async function SingleCoursePage({params} : {params : Promise<{ slug: string }>} ) {

    const { slug } = await params
    const blog = courseCard.find((b) => b.slug === slug)

    if (!blog) { notFound() }

  return (

    <>
    <Navbar />

    <MainCarousel />

    <SingleCourseTheme blog={blog} />

    <Footer />
    </>

  )
}
