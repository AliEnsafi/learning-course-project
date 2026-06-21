<<<<<<< HEAD

import { supabase } from "@/lib/supabase"
=======
import React from "react"

import { data } from "./data"
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
import ArticleTheme from "./articleTheme"

import { FaRegClone } from "react-icons/fa"
import Link from "next/link"



<<<<<<< HEAD
async function Article () {

    const { data , error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false }).limit(3)

    if (error) { return <div>داده‌ای پیدا نشد! </div> }
=======

const Article : React.FC = () => {
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

    return(

        <>
        <div className="container text-center my-28 space-y-10 mx-auto lg:mx-0">
            <div className="article-title">
                <h2 className="text-2xl">مقالات آموزشی</h2>
            </div>
            <div className="article-desc w-full flex justify-center content-center ">
                <p className="font-extralight opacity-60 w-2/3">
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
            <div className="article-theme mt-8">

                <div className="flex flex-wrap justify-center items-center space-y-10 lg:space-y-0">
                    {
<<<<<<< HEAD
                        data?.map((item) => {

                            const { id , imageUrl , title , description , writer , views , comments , slug} = item

                            return <ArticleTheme key={id} image={imageUrl} title={title} description={description} slug={slug}
                                                 writer={writer} views={views} comments={comments} />
=======
                        data.map((item) : any => {

                            const { id , image , title , description , writer , category , views , comments , slug} = item

                            return <ArticleTheme key={id} image={image} title={title} description={description} slug={slug}
                                                 writer={writer} category={category} views={views} comments={comments} />
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

                        })
                    }
                </div>

                <div className="aticle-morebtn">
                    <div className="flex justify-center mt-5">
                            <div className="flex text-center justify-center items-center space-x-1 bg-white text-violet-700 cursor-pointer border border-violet-700 rounded-md
                                            w-36 py-2 hover:bg-violet-700 hover:text-white transition-colors">
                            <FaRegClone />
                            <Link href='./blogs' className="cursor-pointer">مقالات بیشتر</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )

}

export default Article
