
import Image from "next/image"
import Link from "next/link"

import { timData } from "./timData"

import { FaArrowLeft } from "react-icons/fa"

import teamImg from './../../../public/Images/team-1.jpeg'

import './ourTim.css'

const OurTim = () => {

  return(

    <>
    <section className="our-tim my-10">
        <div className="container">
            <div className="tim-title">
                <h3 className="text-gray-800 font-bold text-xl mt-1">
                        {`تیم  `}
                    <span className="relative">
                        ما
                        <i className="absolute right-0 bottom-1 z-negative bg-violet-500 bg-opacity-40 w-full h-1 flex"></i>
                    </span>
                </h3>
            </div>
            <div className="tim-person grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                {
                    timData.map((item) : any => {

                        const { id , name , job } = item

                        return(
                            <div key={id} className="flex flex-col items-center transition duration-200 cursor-pointer
                                            hover:shadow-sm border border-gray-300 rounded-xl pt-8 pb-9">

                                <div className="bdr-ripple-ani-btn w-24 h-24 mb-5 transform
                                                transition duration-200 border-4 ring ring-violet-700 ring-opacity-10
                                                overflow-hidden bg-gray-300 group relative rounded-full border-solid">
                                    <Image src={teamImg} alt="teamImage"
                                           className="transition duration-200 transform group-hover:scale-110 w-full h-full"/>
                                </div>
                                <div className="mt-2 space-y-5 text-center">
                                    <h4 className="tim-title text-violet-800 font-bold
                                             hover:text-gray-900 transition duration-200 leading-3">
                                        {name}
                                    </h4>
                                    <h6 className="time-job text-sm text-gray-700">
                                        {job}
                                    </h6>
                                </div>
                            </div>
                        )

                    })
                }
                <div>
                            <div className="flex flex-col items-center transition duration-200 cursor-pointer
                                            hover:shadow-sm border border-gray-300 rounded-xl pt-8 pb-9 h-64">

                                <div className="mt-2 space-y-10 text-center">
                                    <h4 className="tim-title text-violet-800 font-bold
                                             hover:text-gray-900 transition duration-200 leading-3">
                                        نفر بعدی شما باشید
                                    </h4>
                                    <h6 className="time-job text-sm text-gray-700 leading-relaxed">
                                        اگر در شاخه ای متخصص هستید، به کمک شما نیازمندیم
                                    </h6>
                                    <div className="text-xs text-violet-600 hover:text-violet-800 transition">
                                        <Link href="./contact-us" className="flex justify-center">
                                        درخواست همکاری
                                        <span><FaArrowLeft className="mx-1 mt-0.5" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </section>
    </>

  )

}

export default OurTim
