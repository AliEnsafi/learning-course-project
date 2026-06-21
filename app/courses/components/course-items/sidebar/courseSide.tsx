"use client"

import React, { useState } from "react"

import SideAdvancedTheme from "./sideAdvanced"

import { buttonfilters } from "./data"


type SidebarFilterProps = {

  filter: "all" | "free" | "paid"
  setFilter: (value: "all" | "free" | "paid") => void

}
type FilterType = "all" | "free" | "paid"




const CourseSide : React.FC<SidebarFilterProps> = ({ filter , setFilter }) => {

    const [activeFilter , setActiveFilter] = useState<FilterType>()

    const activeHandler = (value: 'all' | 'free' | 'paid') => {

        setActiveFilter(value)
        setFilter(value)
    }


    const btnStyles = (isActive: boolean) =>
    ` w-60 py-2 rounded-lg border  text-center text-gray-700 font-medium
    hover:bg-violet-600 hover:text-white transition-colors
    ${
        isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-700 border-gray-300'
    } `

    return(

        <>

        <div className="hidden lg:block w-full pr-5">
            <div className="mt-10 border border-gray-200 rounded-xl w-full">

                <div className="filter-price bg-violet-500 text-white rounded-t-xl">
                    <div className="price-title border-b border-gray-200 text-center py-5">
                        <h2 className="text-xl">نوع دوره</h2>
                    </div>
                </div>

                <div className="price-checkbox">
                    <div className="flex flex-col items-center gap-6 p-4">

                    {
                        buttonfilters.map(item => {
<<<<<<< HEAD
                            const { id, label , value } = item

                            return(

                            <label key={id} className="flex items-start cursor-pointer">
=======
                            const { label , value } = item

                            return(

                            <label className="flex items-start cursor-pointer">
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

                                <input type="checkbox" className="hidden peer"/>
                                <span className={btnStyles(activeFilter === `${value}`)}
                                      onClick={() => activeHandler(value)}>
                                        {label}
                                </span>

                            </label>

                            )
                        })
                    }

                    </div>
                </div>

            </div>


            <SideAdvancedTheme />
        </div>

        </>
    )
}

export default CourseSide
