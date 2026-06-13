
import { StaticImageData } from "next/image"

import articleIMg1 from './../../../public/Images/new/programming.jpg'
import articleIMg2 from './../../../public/Images/new/google-colab.jpg'
import articleIMg3 from './../../../public/Images/new/technology.jpg'


interface dataItems {
    id: number,
    image: string | StaticImageData,
    title: string,
    description: string,
    category: string,
    writer: string,
    views: number,
    comments: number,
    slug: string
}

export const data : dataItems[] = [

    {
        id: 1,
        image: articleIMg1,
        title: 'آشنایی با برنامه نویسی',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...',
        category: 'برنامه نویسی',
        writer: 'تیم ما',
        views: 6151,
        comments: 12,
        slug:'programming'
    },
    {
        id: 2,
        image: articleIMg2,
        title: 'google colab چیست؟',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...',
        category: 'برنامه نویسی',
        writer: 'تیم ما',
        views: 8568,
        comments: 6,
        slug:'google-colab'
    },
    {
        id: 3,
        image: articleIMg3,
        title: 'آشنایی با ترندهای تکنولوژی در سال 2022',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...',
        category: 'تکنولوژی',
        writer: 'علی انصافی',
        views: 5057,
        comments: 12,
        slug:'tech-trend'
    }
]
