import React from "react"

import { categories } from "./data"


const CategoryItems : React.FC = () => {

    return(

        <>
            <div className="container w-full flex justify-center">
                <div className="w-4/5 mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {
                        categories.map((item) : any => {

                            const Icon = item.icon
                            const {id , title} = item

                            return(
                                <div key={id} className="category-item flex flex-col items-center space-y-5 py-4
                                                         cursor-pointer border border-gray-200 rounded-xl">
                                    <div className="category-icon text-center text-violet-950"><Icon size={28} /></div>
                                    <div className="category-title opacity-80 hover:text-violet-800 transition-colors"> {title} </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default CategoryItems
