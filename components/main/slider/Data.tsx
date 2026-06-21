import { StaticImageData } from "next/image";

import firstImg from './../../../public/Images/young-attractive-man-sitting-sofa-home-working-laptop-online-using-internet-min.jpg'
import secondImg from './../../../public/Images/enjoy-learn.jpeg'


export type props = {

    id: number,
    title: string,
    description: string,
    image: string | StaticImageData

}

interface sliderDataTheme {

    id: number,
    title: string,
    description: string,
    image: string | StaticImageData

}

export const firstData : sliderDataTheme[] = [

    {
        id: 1,
        title: 'یادگیری را برای خود لذت بخش کنید!',
        description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .',
        image : firstImg
    }
]

export const secondData : sliderDataTheme[] = [

    {
        id: 1,
        title: 'لذت یادگیری را تجربه کنید ...' ,
        description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .',
        image : secondImg
    }
]
