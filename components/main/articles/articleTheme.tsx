
import Link from "next/link"
import Image from "next/image"

import { FaEye , FaRegCommentAlt, FaUser } from "react-icons/fa"


const ArticleTheme = (props : any) => {

    const { id , title , image , description , writer , views , comments , slug} = props

  return (

    <>

    <div key={id} className="md:w-1/2 lg:w-1/4 space-x-3">

        <Link href={`/blogs/${slug}`}>
            <article className="border border-slate-200 rounded-md shadow-sm m-2">

                <Image src={image} alt="pic1" />

                <div className="p-5 h-28">
                    <h3 className="mb-3 text-slate-900 text-sm hover:text-violet-700 transition-colors cursor-pointer">{title}</h3>
                    <p className="text-sm text-slate-600">{description}</p>
                </div>

                <footer className="p-5 border-t border-slate-200 flex justify-between">

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
         </Link>

    </div>

    </>

  )


}

export default ArticleTheme
