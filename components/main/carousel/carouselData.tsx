import { StaticImageData } from "next/image"
import testImage from './../../../public/Images/new/learning1.jpg'
import second from './../../../public/Images/new/learning2.jpg'
import third from './../../../public/Images/new/learning3.jpg'


interface dataProps {
    id: number,
    image: StaticImageData,
    alt: string
}

export const CarouselData : dataProps[] = [
    {
        id: 1,
        image: testImage,
        alt: "testImage"
    },
    {
        id: 2,
        image: second,
        alt: "secondimg"
    },
    {
        id: 3,
        image: third,
        alt: "thirdimg"
    },
]
