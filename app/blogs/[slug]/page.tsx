import { notFound } from "next/navigation"

<<<<<<< HEAD
import { supabase } from "@/lib/supabase"

import SingleBlogTheme from "./singleBlogTheme"
import MainCarousel from "@/components/main/carousel/mainCarousel"
import { Navbar , Footer } from "@/components/homePageImport"


export default async function SingleBlogPage({params} : {params : Promise<{ slug: string }>} ) {

    const { slug } = await params;

    const { data : blog , error } = await supabase.from('blogs').select('*').eq('slug', slug).single()

    if (error || !blog) { notFound() }
=======
import { articleData } from "../data"
import SingleBlogTheme from "./singleBlogTheme"
import { Navbar , Footer } from "@/components/homePageImport"

import MainCarousel from "@/components/main/carousel/mainCarousel"


export default async function SingleBlogPage({params} : {params : Promise<{ slug: any }>} ) {

    const { slug } = await params;
    const blog = articleData.find((b) => b.slug === slug)

    if (!blog) { notFound() }
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

  return (
    <>
    <Navbar />

    <MainCarousel />

    <SingleBlogTheme blog={blog} />

    <Footer />
    </>
  )
}
