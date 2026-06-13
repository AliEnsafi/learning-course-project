import React from "react"
import Link from "next/link"

import { dataItemsProps } from "./data"

import { FaRegLightbulb } from "react-icons/fa"


const WhyUsTheme : React.FC<dataItemsProps> = (props) => {

    let {id , title , description} = props

    return(

        <>
            <div key={id} className="w-full lg:w-1/4 space-y-5">
                <article className="text-center ml-5 md:ml-0 text-sm cursor-pointer">

                    <div className="py-5 px-3 space-y-4">
                        <p className="text-xl font-semibold">{title}</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className="font-extralight opacity-60 w-4/5 text-center">{description}</p>
                    </div>

                </article>
                <div className="flex justify-center mt-5">
                    <div className="flex text-center justify-center items-center space-x-1 bg-white text-violet-700 cursor-pointer border border-violet-700 rounded-md
                                    w-28 py-2 hover:bg-violet-700 hover:text-white transition-colors">
                        <FaRegLightbulb />
                        <Link href="/about-us" className="cursor-pointer">بیشتر بدانید</Link>
                    </div>
                </div>
            </div>
        </>

    )
}


export default WhyUsTheme
