
import { Navbar , Footer } from "@/components/homePageImport"

import MainCarousel from "@/components/main/carousel/mainCarousel"

import CourseCategory from "./components/category/courseCategory"
import CourseItems from "./components/course-items/courseItems"



export default function Courses() {

    return(

        <>
        <Navbar />

        <MainCarousel />

        <CourseCategory />

        <CourseItems />



        <Footer />
        </>

    )
}
