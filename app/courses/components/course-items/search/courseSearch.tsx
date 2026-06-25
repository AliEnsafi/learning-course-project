"use client";

import { useMemo, useState, useEffect, useRef } from "react"
import Fuse from "fuse.js"

import CourseSearchTheme from "./courseSearchTheme"

export type Course = {
  id: string;
  title: string;
  slug: string;
}

interface Props {

  items: Course[]
  minChars?: number
  onQueryChange: (query: string) => void
}

export default function CourseSearch({ items, minChars = 2, onQueryChange }: Props) {

  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)

  }, [])


  useEffect(() => {

    onQueryChange(query)
  }, [query, onQueryChange])

  const fuse = useMemo(() => {

    return new Fuse(items, {
      keys: ["title"],
      threshold: 0.3,
      distance: 100,
    })

  }, [items])


  return (
    <div className="relative w-full" ref={wrapperRef}>

      <CourseSearchTheme query={query} setQuery={setQuery} isOpen={isOpen} setIsOpen={setIsOpen}
                         minChars={minChars} fuse={fuse}  />

    </div>
  )
}
