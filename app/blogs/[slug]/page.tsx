import { notFound } from "next/navigation"

import { supabase } from "@/lib/supabase"

import SingleBlogTheme from "./singleBlogTheme"
import MainCarousel from "@/components/main/carousel/mainCarousel"
import { Navbar , Footer } from "@/components/homePageImport"


export default async function SingleBlogPage({params} : {params : Promise<{ slug: string }>} ) {

    const { slug } = await params;

    const { data : blog , error } = await supabase.from('blogs').select('*').eq('slug', slug).single()

    if (error || !blog) { notFound() }

  return (
    <>
    <Navbar />

    <MainCarousel />

    <SingleBlogTheme blog={blog} />

    <Footer />
    </>
  )
}
