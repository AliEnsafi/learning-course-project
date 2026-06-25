import { notFound } from "next/navigation"

import { supabase } from "@/lib/supabase"

import { Navbar , Footer } from "@/components/homePageImport"
import MainCarousel from "@/components/main/carousel/mainCarousel"
import SingleCourseTheme from "../components/single-course/singleCourseTheme"


export default async function SingleCoursePage({params} : {params : Promise<{ slug: string }> } ) {

    const { slug } = await params

    const { data : course , error } = await supabase.from("courses").select("*").eq("slug" , slug).single();


    if (error || !course) { notFound() }

  return (

    <>
    <Navbar />

    <MainCarousel />

    <SingleCourseTheme course={course} />

    <Footer />
    </>

  )
}
