import React from "react"

import "./learnMore.css"

import Image from "next/image"
import mainImg from "./../../../public/Images/abstract-blur-defocused-bookshelf-library.jpg"
import background from "./../../../public/Images/bg-box.png"

import { FaRegLightbulb } from "react-icons/fa"
import Link from "next/link"


const LearnMore: React.FC = () => {
  let backgroundStyle = {
    backgroundImage: `url( ${background} )`,
  }

  return (
    <>
      <div style={backgroundStyle}>
        <div className="mt-20 container block text-center items-center space-y-8 lg:space-y-0 lg:flex lg:justify-center lg:space-x-10">

          <div className="learnmore-img flex justify-center md:justify-start md:mr-5 lg:mr-0">
            <Image
              src={mainImg}
              alt="mainImg"
              className="w-md lg:w-xl h-64 lg:h-80 rounded-xl"
            />
          </div>

          <div className="learnmore-docs text-start mr-4 lg:mr-0 mt-4 lg:mt-0 lg:max-w-xl space-y-3">
            <div className="docs-title">
              <h2 className="text-2xl font-bold">
                درباره <span className="text-violet-700">آموزشگاه ما</span>{" "}
                بیشتر بدانید...
              </h2>
              <br />
            </div>

            <div className="docs-description font-extralight opacity-60 text-justify ml-3 lg:ml-0">
              <p>
                برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. برای تغییر این متن بر روی دکمه ویرایش کلیک کنید.
              </p>
              <br />
              <p>
                برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است.
              </p>
              <br />
            </div>

            <div
              className="docs-btn flex justify-center space-x-1 bg-white text-violet-700 cursor-pointer border border-violet-700 rounded-md
                                w-28 py-2 hover:bg-violet-700 hover:text-white transition-colors"
            >
              <FaRegLightbulb className="mt-1" />
              <Link href='/about-us' className="cursor-pointer">درباره ما</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LearnMore;
