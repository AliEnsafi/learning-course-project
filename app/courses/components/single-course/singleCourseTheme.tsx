<<<<<<< HEAD
=======
import { StaticImageData } from "next/image"
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

import SingleCourseMain from "./singleCourseMain"
import SingleCourseSide from "./singleCourseSide"

<<<<<<< HEAD

const SingleCourseTheme = ( {course} : any ) => {

    console.log(course)


    const { id , title , imageUrl , pricedisplay , author , time , level } = course
=======
import { courseCardProps } from "../course-items/cards/data"

interface SingleCourseDataProps {

    blog: courseCardProps
}

const SingleCourseTheme = ( {blog} : SingleCourseDataProps ) => {

    const { id , title , image , pricedisplay , author , time , level } = blog
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

    return(

        <section className="flex justify-center w-full my-10">

            <div className="w-10/12 lg:flex lg:justify-between space-y-8 lg:space-y-0">
<<<<<<< HEAD
                <div> <SingleCourseMain id={id} title={title} author={author} /> </div>
                <div> <SingleCourseSide id={id} author={author} imageUrl={imageUrl} price={pricedisplay} time={time} level={level}  /> </div>
=======
                <div> <SingleCourseMain key={id} title={title} author={author} /> </div>
                <div> <SingleCourseSide key={id} author={author} image={image} price={pricedisplay} time={time} level={level}  /> </div>
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
            </div>

        </section>

    )
}

export default SingleCourseTheme
