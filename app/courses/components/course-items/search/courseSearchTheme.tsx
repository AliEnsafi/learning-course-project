"use client";

import Fuse from "fuse.js"
import React , {useMemo} from "react"

import { Course } from "./courseSearch"

interface Props {

    query: string,
    setQuery: (value: string | ((prev: string) => string)) => void,
    isOpen: boolean,
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void,
    minChars ?: number,
    fuse: Fuse<Course>
}


const CourseSearchTheme : React.FC<Props> = (props) => {

    const {query , setQuery, isOpen , setIsOpen , minChars = 2 , fuse} = props

    const searchResults = useMemo(() => {
        const q = query.trim()

        if (q.length < minChars) return []

        return fuse.search(q).map((r) => r.item).slice(0, 5)

    }, [query, fuse, minChars])

    return(

      <>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="جستجو در دوره‌ها..."
          className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <svg
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35m1.85-5.4a7.2 7.2 0 1 1-14.4 0 7.2 7.2 0 0 1 14.4 0Z" />
        </svg>
      </div>

      {isOpen && query.length >= minChars && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          {searchResults.length > 0 ? (
            <div className="max-h-60 overflow-auto">
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  onClick={() => {

                    setQuery(item.title)
                    setIsOpen(false)

                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">نتیجه‌ای یافت نشد</div>
          )}
        </div>
      )}

      </>
    )
}

export default CourseSearchTheme
