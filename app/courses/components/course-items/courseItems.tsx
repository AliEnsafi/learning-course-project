"use client";

import { useState, useMemo, useEffect } from "react"

import CourseSide from "./sidebar/courseSide"
import CourseCardTheme from "./cards/courseCardTheme"

type FilterType = "all" | "free" | "paid"

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

            if (filter === "free") return course.priceRaw === 0
            if (filter === "paid") return course.priceRaw > 0

            return true
        })

    }, [courses , filter])

    if (error) { return <div>{error}</div> }


    return(

        <>
        <div className="container grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen w-full gap-0 my-14">

            <CourseSide filter={filter} setFilter={setFilter} />

            <div className="w-full flex justify-center">
                <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

                {
                    filteredCourses.map(item => {
                        const { id , imageUrl , title , author , time , pricedisplay , slug} = item

                        return <CourseCardTheme key={id} title={title} imageUrl={imageUrl} author={author} time={time} price={pricedisplay} slug={slug} />

                    })
                }

                </div>
            </div>

        </div>
        </>
    )
}

export default CourseItems
