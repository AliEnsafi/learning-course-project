import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FaLayerGroup } from "react-icons/fa";

import { dataItemsProps } from "./data";


const CardTheme: React.FC<dataItemsProps> = (props) => {

  let { id, image, title, description, level, price , slug } = props;


  return (

    <>
      <div key={id} className="w-full md:w-1/3 lg:w-1/4">
      <Link href={`/courses/${slug}`}>
          <article className="border ml-10 md:ml-0 border-slate-200 rounded-md shadow-sm text-sm cursor-pointer">
          <Image src={image} alt="image" width={500} height={300} />

          <div className="py-5 px-3 space-y-4">
            <p className="text-lg hover:text-violet-700 transition-colors">{title}</p>
            <p className="font-extralight opacity-60 text-sm">{description}</p>
          </div>

          <footer className="flex justify-between pb-3 mt-10">
            <div className="flex items-center mx-3 space-x-2 text-violet-700">
              <div>
                <FaLayerGroup />
              </div>
              <p>{level}</p>
            </div>
            <div className="mx-3">
              <h6 className="text-sky-900">{price}</h6>
            </div>
          </footer>

        </article>
      </Link>
      </div>
    </>

  )
}

export default CardTheme
