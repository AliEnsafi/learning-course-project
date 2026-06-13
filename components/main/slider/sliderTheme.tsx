import React from "react"

import Image from "next/image"
import Link from "next/link"

import { FaRegLightbulb } from "react-icons/fa"

import { props } from "./Data"

import './sliderTheme.css'


const SliderTheme : React.FC<props> = (props) => {

    const { id , title , description , image } = props

    return(

        <>

        <div key={id} className="my-14 content-center">

            <div className=" text-white content-center items-center space-y-10 lg:space-y-0 lg:flex lg:justify-around lg:space-x-26">
                <div className="slider-docs space-y-5 flex-col content-center w-full mx-3 lg:mx-0 lg:w-1/3 items-center">

                    <div className="slider-title text-2xl font-extrabold"> {title} </div>

                    <div className="slider-desc w-11/12 font-extralight opacity-60 text-justify"> {description} </div>

                    <div className="slider-btn flex text-center justify-center items-center space-x-1
                    bg-violet-700 text-white cursor-pointer border border-white rounded-md w-28 py-2">

                        <FaRegLightbulb />
                        <Link href="/about-us" className="cursor-pointer">بیشتر بدانید</Link>

                    </div>

                </div>

                <div className="slider-img w-md lg:w-lg h-72 lg:h-80 mx-auto lg:mx-0">
                        <Image src={image} alt="firstImg" className="rounded-md" />
                </div>
            </div>

        </div>

        </>

    )


}


export default SliderTheme
