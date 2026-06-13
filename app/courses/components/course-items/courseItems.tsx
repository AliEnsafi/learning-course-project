"use client";

import React, { useEffect } from "react"
import { useState, useMemo } from "react"

import CourseSide from "./sidebar/courseSide"
import CourseCardTheme from "./cards/courseCardTheme"

type FilterType = "all" | "free" | "paid"

import { courseCard } from "./cards/data"



const CourseItems : React.FC = () => {

    const [filter , setFilter] = useState<FilterType>("all")

    const filteredCourses = useMemo(() => {

        return courseCard.filter((course) => {

            if (filter === "free") return course.priceRaw === 0
            if (filter === "paid") return course.priceRaw > 0

            return true
        })

    }, [filter])


    return(

        <>
        <div className="container grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen w-full gap-0 my-14">

            <CourseSide filter={filter} setFilter={setFilter} />

            <div className="w-full flex justify-center">
                <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

                {
                    filteredCourses.map(item => {
                        const { id , image , title , author , time , pricedisplay , slug} = item

                        return <CourseCardTheme key={id} image={image} title={title} author={author} time={time} price={pricedisplay} slug={slug} />

                    })
                }

                </div>
            </div>

        </div>
        </>
    )
}

export default CourseItems
