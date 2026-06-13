import React from "react"
import Image from "next/image"
import Link from "next/link"

import { articleData } from "./data"

import { FaEye , FaRegCommentAlt , FaUser} from "react-icons/fa"


const ArticleTheme :React.FC = () => {

    return(

        <>
        <div className="container w-full flex justify-center items-center mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-4/5">
            {
                articleData.map((item) : any => {

                    const { id , image , title , description , writer , views , comments , slug } = item

                    return(

                    <div key={id} className="article-theme">

                        <article className="border border-slate-200 rounded-md shadow-sm w-full cursor-pointer">

                            <Image src={image} alt="image" className="min-w-full" />

                            <div className="p-5 h-28">
                                <Link key={id} href={`/blogs/${slug}`}>
                                    <h3 className="mb-3 text-slate-900 text-sm hover:text-violet-800 ">{title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                                </Link>
                            </div>

                            <footer className="p-5 border-t mt-7 border-slate-200 flex justify-between">

                                <section className="flex space-x-5">
                                    <div className="flex items-center text-sm text-slate-700 space-x-2 ">
                                        <div className="text-sm text-slate-300"> <FaEye /> </div>
                                        <p className="mt-0.5">{views}</p>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-700 space-x-2">
                                        <div className="text-sm text-slate-300"> <FaRegCommentAlt /> </div>
                                        <p className="mt-0.5">{comments}</p>

                                    </div>
                                </section>
                                <section>
                                    <div className="flex items-center space-x-2">
                                        <div className="text-sm text-sky-300">
                                            <FaUser  />
                                        </div>
                                        <p className="text-sky-500 text-sm font-light mt-0.5">{writer}</p>
                                    </div>
                                </section>

                          </footer>

                        </article>

                    </div>

                    )

                } )
            }
        </div>

        </div>

        </>

    )
}

export default ArticleTheme
