
import Image from "next/image"
import currentImg from './../../../../public/Images/new/carousel.jpg'



const CourseCarousel = () => {

    return(

        <div className="mt-20 w-full flex justify-center">
            <Image src={currentImg} alt="test" className="rounded" height={300}/>
        </div>
    )
}


export default CourseCarousel
