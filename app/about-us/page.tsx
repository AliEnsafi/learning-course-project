
import { Navbar , Footer } from "@/components/homePageImport"

import OurInfo from "./components/ourInfo"
import MainCarousel from "@/components/main/carousel/mainCarousel"


export default function AboutUs() {

    return(
        <>

        <Navbar />

        <MainCarousel />

        <OurInfo />

        <Footer/>

        </>
    )

}
