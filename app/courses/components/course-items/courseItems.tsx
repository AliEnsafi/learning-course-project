"use client";

<<<<<<< HEAD
import { useState, useMemo, useEffect } from "react"
=======
import React, { useEffect } from "react"
import { useState, useMemo } from "react"
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

import CourseSide from "./sidebar/courseSide"
import CourseCardTheme from "./cards/courseCardTheme"

type FilterType = "all" | "free" | "paid"

<<<<<<< HEAD
import { supabase } from "@/lib/supabase"


const CourseItems = () => {

        const [courses, setCourses] = useState<any[]>([]);
        const [filter, setFilter] = useState<FilterType>("all");
        const [error, setError] = useState<string | null>(null);


      useEffect(() => {
            const fetchCourses = async () => {

                const { data , error } = await supabase.from("courses").select("*");

                if (error) {
                setError(error.message);
                return;
                }

                setCourses(data || []);
            }

            fetchCourses();
        }, []);


    const filteredCourses = useMemo(() => {

        return courses.filter((course) => {
=======
import { courseCard } from "./cards/data"



const CourseItems : React.FC = () => {

    const [filter , setFilter] = useState<FilterType>("all")

    const filteredCourses = useMemo(() => {

        return courseCard.filter((course) => {
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

            if (filter === "free") return course.priceRaw === 0
            if (filter === "paid") return course.priceRaw > 0

            return true
        })

<<<<<<< HEAD
    }, [courses , filter])

    if (error) { return <div>{error}</div> }
=======
    }, [filter])
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c


    return(

        <>
        <div className="container grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen w-full gap-0 my-14">

            <CourseSide filter={filter} setFilter={setFilter} />

            <div className="w-full flex justify-center">
                <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

                {
                    filteredCourses.map(item => {
<<<<<<< HEAD
                        const { id , imageUrl , title , author , time , pricedisplay , slug} = item

                        return <CourseCardTheme key={id} title={title} imageUrl={imageUrl} author={author} time={time} price={pricedisplay} slug={slug} />
=======
                        const { id , image , title , author , time , pricedisplay , slug} = item

                        return <CourseCardTheme key={id} image={image} title={title} author={author} time={time} price={pricedisplay} slug={slug} />
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

                    })
                }

                </div>
            </div>

        </div>
        </>
    )
}

export default CourseItems
