
import { StaticImageData } from 'next/image'

import course1 from './../../../public/Images/new/asp-net.jpg'
import course2 from './../../../public/Images/new/be-programmer.jpg'
import course3 from './../../../public/Images/new/microservice.jpg'

export interface dataItemsProps {

    id: number,
    image: StaticImageData,
    title: string,
    description: string,
    level: string,
    price: string,
    slug: string
}


export const data : dataItemsProps[] = [

    {
        id: 1,
        image: course1,
        title: 'آموزش ساخت سایت مزایده ای با Asp.net',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...',
        level: 'سطح پیشرفته',
        price: '1,600,000 تومان',
        slug: 'asp-net'

    },
    {
        id: 2,
        image: course2,
        title: 'بوت کمپ برنامه نویس شو',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...',
        level: 'سطح مقدماتی',
        price: '2,925,000 تومان',
        slug: 'bootcamp-programming'
    },
    {
        id: 3,
        image: course3,
        title: 'پیاده سازی صفر تا صد پروژه میکرو سرویس',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...',
        level: 'سطح متوسط',
        price: 'رایگانـ',
        slug: 'micro-services'
    }
]
