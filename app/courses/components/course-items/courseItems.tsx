"use client";

import { useEffect, useMemo, useState } from "react"

import CourseSide from "./sidebar/courseSide"
import CourseCardTheme from "./cards/courseCardTheme"
import CourseSearch from "./search/courseSearch"

import { supabase } from "@/lib/supabase"

import { CourseItemsProps } from "@/types/courses.types"
type FilterType = "all" | "free" | "paid"



const CourseItems = () => {

  const [courses, setCourses] = useState<CourseItemsProps[]>([])
  const [filter, setFilter] = useState<FilterType>("all")
  const [error, setError] = useState<string | null>(null)

  const [searchQuery, setSearchQuery] = useState("")


  useEffect(() => {
    const fetchCourses = async () => {

      const { data, error } = await supabase.from("courses").select("*")

      if (error) {
        setError(error.message)
        return
      }
      setCourses((data || []) as CourseItemsProps[])
    }

    fetchCourses()
  }, [])


  const filteredCourses = useMemo(() => {

    return courses.filter((course) => {

      const matchesSearch = course.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase().trim())


        let matchesPrice = true
        if (filter === "free") matchesPrice = (course.priceRaw ?? 0) > 0
        if (filter === "paid") matchesPrice = (course.priceRaw ?? 0) > 0

      return matchesSearch && matchesPrice
    })
  }, [courses, filter, searchQuery])

  if (error) return <div className="p-10 text-red-500">{error}</div>


  return (

    <div className="container grid grid-cols-1 min-h-screen w-full gap-0 my-14 lg:grid-cols-[280px_1fr]">

      <CourseSide filter={filter} setFilter={setFilter} />

      <div className="w-full">
        <div className="mx-auto mt-4 w-4/5 max-w-3xl">
          <CourseSearch
            items={courses.map((c) => ({
              id: String(c.id),
              title: c.title,
              slug: c.slug,
            }))}
            onQueryChange={(val) => setSearchQuery(val)} // آپدیت کردن استیت والد
          />
        </div>

        <div className="flex w-full justify-center">
          <div className="mt-8 grid w-4/5 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((item) => (
                <CourseCardTheme
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  author={item.author}
                  time={item.time}
                  price={item.pricedisplay}
                  priceRaw={item.price ?? item.priceRaw}
                  slug={item.slug}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-500 dark:text-gray-400">
                دوره‌ای با این مشخصات پیدا نشد.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItems
