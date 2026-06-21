<<<<<<< HEAD

=======
import { StaticImageData } from "next/image"
import React from "react"
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
import Image from "next/image"

import { FaUser , FaSignal , FaClock , FaAward , FaBookReader , FaRegQuestionCircle } from "react-icons/fa"


<<<<<<< HEAD
const SingleCourseSide = (props : any) => {

    const {key , imageUrl , author , price , time , level } = props

    return(
        <>
        <section key={key} className="border border-gray-200 px-10 py-5 rounded-md space-y-10 w-96">
            <div className="flex-col space-y-6 items-center justify-center">
=======
interface props {

    key: number
    image: StaticImageData,
    author: string,
    price: string,
    time: string,
    level: string
}

const SingleCourseSide : React.FC<props> = (props) => {

    const { key , image , author , price , time , level } = props

    return(
        <>
        <section className="border border-gray-200 px-10 py-5 rounded-md space-y-10 w-96">
            <div key={key} className="flex-col space-y-6 items-center justify-center">
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
                <div>
                    <h2 className="courseside-title text-xl text-center font-bold">اطلاعات دوره</h2>
                </div>
                <div className="courseside-img rounded">
<<<<<<< HEAD
                    <Image src={imageUrl} alt={price} width={300} height={180} />
=======
                    <Image src={image} alt={price} width={300} height={180} />
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
                </div>
                <div className="font-semibold text-violet-700 text-center">
                    {price}
                </div>
                <div className="courseside-btn">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                         خرید
                    </button>
                </div>
            </div>
            <div className="courseside-desc text-violet-950 space-y-5">
                <div className="courseside-author flex space-x-2 items-center">
                    <FaUser />
                    <p> {author} </p>
                </div>
                <div className="courseside-level flex space-x-2 items-center">
                    <FaSignal />
                    <p> {level} </p>
                </div>
                <div className="courseside-time flex space-x-2 items-center">
                    <FaClock />
                    <p> {time} </p>
                </div>
                <div className="courseside-Certificate flex space-x-2 items-center">
                    <FaAward />
                    <p>گواهی پایان دوره</p>
                </div>
                <div className="courseside-access flex space-x-2 items-center">
                    <FaBookReader />
                    <p>دسترسی همیشگی</p>
                </div>
                <div className="courseside-test flex space-x-2 items-center">
                    <FaRegQuestionCircle />
                    <p>آزمون در انتهای دوره</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default SingleCourseSide
