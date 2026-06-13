import Image from "next/image";

import "./header.css";

import headIMage from "./../../public/Images/hero-image-academy.jpeg";

import { FaRegFile, FaRegLightbulb } from "react-icons/fa";
import Link from "next/link";


const Header: React.FC = () => {

  return (

    <>
      <div className="mt-20 mx-10 lg:mx-0 container lg:flex lg:justify-around">
        <div className="head-docs space-y-10 flex-col content-center mb-5 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl">
            آموزش ببین،<span className="text-violet-700">آینده </span>تو بساز
          </h2>
          <p className="font-extralight opacity-60 max-w-10/12">
            با دسترسی به بیش از 1000 ساعت آموزش، 126 مدرس مجرب و 500 دانشجوی
            فعال
          </p>

          <div className="flex space-x-3 mr-1">
            <div className="flex space-x-1 text-white bg-violet-700 px-5 py-2 rounded-md hover:bg-violet-800 transition-colors cursor-pointer">
              <FaRegFile className="mt-1" />
              <Link href="/courses" className="cursor-pointer">دوره های ما</Link>
            </div>
            <div
              className="flex space-x-1 bg-white text-violet-700 border border-violet-700 px-5 py-2 rounded-md cursor-pointer
                                        hover:bg-violet-700 hover:text-white transition-colors"
            >
              <FaRegLightbulb className="mt-1" />
              <Link href="/about-us" className="cursor-pointer">درباره ما</Link>
            </div>
          </div>
        </div>

        <div className="header-img flex justify-center ml-20 md:ml-0 lg:ml-14 mt-10 lg:mt-0">
          <Image
            src={headIMage}
            alt="headImage"
            className="shadow-md shadow-cyan-200 rounded-lg w-72 lg:w-96 object-cover"
          />
        </div>
      </div>
    </>

  )

}

export default Header
