import { StaticImageData } from "next/image"

import SingleCourseMain from "./singleCourseMain"
import SingleCourseSide from "./singleCourseSide"

import { courseCardProps } from "../course-items/cards/data"

interface SingleCourseDataProps {

    blog: courseCardProps
}

const SingleCourseTheme = ( {blog} : SingleCourseDataProps ) => {

    const { id , title , image , pricedisplay , author , time , level } = blog

    return(

        <section className="flex justify-center w-full my-10">

            <div className="w-10/12 lg:flex lg:justify-between space-y-8 lg:space-y-0">
                <div> <SingleCourseMain key={id} title={title} author={author} /> </div>
                <div> <SingleCourseSide key={id} author={author} image={image} price={pricedisplay} time={time} level={level}  /> </div>
            </div>

        </section>

    )
}

export default SingleCourseTheme
