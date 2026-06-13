import React from "react";

import { courseCard } from "./data";
import PersianNumber from "@/components/persianNumber";

import Image, { StaticImageData } from "next/image";

import { FaUser, FaRegClock } from "react-icons/fa";
import Link from "next/link";


type cardProps = {

    image : string | StaticImageData,
    title: string,
    author: string,
    time: string,
    price: string,
    slug: string

}


const CourseCardTheme: React.FC<cardProps> = (props) => {

    const {  image , title , author , time , price , slug } = props


  return (
    <>
      <article className="border border-slate-200 rounded-md shadow-sm m-2 text-sm cursor-pointer">

        <Link href={`/courses/${slug}`}>
          <Image src={image} alt="aspNET" className="w-full" />
          <div className=" py-5 px-3 space-y-4">
            <p>{title}</p>
            <div className="border-b-2 border-b-slate-200 pb-3 flex space-x-2">
              <div className="text-slate-300">
                <FaUser />
              </div>
              <a href="" className="text-slate-500 text-xs">
                {author}
              </a>
            </div>
          </div>

          <footer className="flex justify-between pb-3">

            <div className="flex items-center mx-3 space-x-2">
              <div className="text-sky-300">
                <FaRegClock />
              </div>
              <p className="text-sky-500">
                <PersianNumber>{time}</PersianNumber>
              </p>
            </div>

            <div className="mx-3">
              <h6 className="text-violet-800 text-sm">
                <PersianNumber>{price}</PersianNumber>
              </h6>
            </div>

          </footer>
        </Link>
      </article>
    </>

  )
}

export default CourseCardTheme;
