
import SingleCourseMain from "./singleCourseMain"
import SingleCourseSide from "./singleCourseSide"


const SingleCourseTheme = ( {course} : any ) => {

    console.log(course)


    const { id , title , slug , imageUrl , pricedisplay , price , priceRaw , author , time , level } = course

    return(

        <section className="flex justify-center w-full my-10">

            <div className="w-10/12 lg:flex lg:justify-between space-y-8 lg:space-y-0">
                <div> <SingleCourseMain id={id} title={title} author={author} /> </div>
                <div>
                  <SingleCourseSide
                    id={id}
                    title={title}
                    slug={slug}
                    author={author}
                    imageUrl={imageUrl}
                    price={pricedisplay}
                    priceRaw={price ?? priceRaw}
                    time={time}
                    level={level}
                  />
                </div>
            </div>

        </section>

    )
}

export default SingleCourseTheme
