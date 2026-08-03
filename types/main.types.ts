import { StaticImageData } from "next/image"

export type reactionProps = {

    id: number,
    name: string,
    age: number,
    city: string,
    massage: string
}

export type SliderThemeProps = {

    id: number,
    title: string,
    description: string,
    image: string | StaticImageData
}

export interface WhyUsThemeProps {
    id: number,
    title: string,
    description: string
}
