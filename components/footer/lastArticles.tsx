import React from "react"
import Link from "next/link"

import { articleData } from "./data"




const LastArticles = () => {

    return(

        <>
        <div className="last-courses space-y-8">
            <div className="last-course-title">
                <h2 className="text-xl">آخرین مقالات</h2>
            </div>

            {
                articleData.map( (item) : any => {

                    const { id, title , date , slug } = item

                    return(

                        <div key={id} className="flex-col space-x-5">
                            <Link href={`/blogs/${slug}`} className="last-course-theme space-y-1 ">
                                <div className="last-course-title opacity-65 cursor-pointer hover:text-violet-600 transition-colors"> { title } </div>
                                <div className="last-course-time text-xs opacity-60"> { date } </div>
                            </Link>
                        </div>

                    )
                })
            }

        </div>
        </>

    )

}

export default LastArticles
