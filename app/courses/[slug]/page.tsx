import { notFound } from "next/navigation"

<<<<<<< HEAD
import { supabase } from "@/lib/supabase"
=======
import { courseCard } from "../components/course-items/cards/data"
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

import { Navbar , Footer } from "@/components/homePageImport"
import MainCarousel from "@/components/main/carousel/mainCarousel"
import SingleCourseTheme from "../components/single-course/singleCourseTheme"

<<<<<<< HEAD

export default async function SingleCoursePage({params} : {params : Promise<{ slug: string }> } ) {

    const { slug } = await params

    const { data : course , error } = await supabase.from("courses").select("*").eq("slug" , slug).single();


    if (error || !course) { notFound() }
=======
export default async function SingleCoursePage({params} : {params : Promise<{ slug: string }>} ) {

    const { slug } = await params
    const blog = courseCard.find((b) => b.slug === slug)

    if (!blog) { notFound() }
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

  return (

    <>
    <Navbar />

    <MainCarousel />

<<<<<<< HEAD
    <SingleCourseTheme course={course} />
=======
    <SingleCourseTheme blog={blog} />
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

    <Footer />
    </>

  )
}
