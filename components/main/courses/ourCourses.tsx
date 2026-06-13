import React from "react";

import { data } from "./data";

import { FaAngleLeft } from "react-icons/fa";

import CardTheme from "./cardTheme";
import Link from "next/link"

const OurCourses: React.FC = () => {

  return (
    <>
      <div className="container text-start mt-20">
        <div className="courses-title space-y-8 md:flex md:justify-around">
          <div className="title-desc right-0 space-y-2">
            <div className="title-head">
              <h2 className="text-xl md:text-2xl">دوره های ما</h2>
            </div>

            <div className="title-doc font-extralight opacity-60 text-justify ml-6 lg:ml-0">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>

          </div>

          <div
            className="docs-btn hidden md:flex md:justify-center md:items-center space-x-1 bg-white text-violet-700 cursor-pointer
                        text-sm w-31 h-10 border px-3 border-violet-700 rounded-md hover:bg-violet-700 hover:text-white
                        transition-colors"
          >
            <Link href="./courses" className="cursor-pointer">مشاهده همه</Link>
            <FaAngleLeft />
          </div>
        </div>

        <div className="courses-item">
          <div className="flex flex-wrap md:justify-around lg:justify-center md:space-x-4 space-y-5 lg:space-y-0 mr-5 lg:mr-0">
            {data.map((item) => {
              const { id, image, title, description, level, price , slug } = item;

              return (
                <CardTheme
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                  level={level}
                  price={price}
                  slug={slug}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurCourses
