
import { StaticImageData } from "next/image"

import aspNET from './../../../../../public/Images/new/asp-net.jpg'
import bootCamp from './../../../../../public/Images/new/be-programmer.jpg'
import Css from './../../../../../public/Images/new/css.jpg'
import fastApi from './../../../../../public/Images/new/api.jpg'
import Html from './../../../../../public/Images/new/html.jpg'
import Micro from './../../../../../public/Images/new/microservice.jpg'
import php from './../../../../../public/Images/new/php.jpg'
import python from './../../../../../public/Images/new/python.jpg'
import tsQL from './../../../../../public/Images/new/sql.jpg'



export interface courseCardProps {

    id: number,
    image : StaticImageData,
    title: string,
    author: string,
    time: string,
    priceRaw: number,
    pricedisplay: string,
    level: string,
    slug: string
}


export const courseCard : courseCardProps[] = [

    {
        id: 1,
        image: aspNET,
        title: 'آموزش ساخت سایت مزایده ای با Asp.net',
        author: 'شجاعی',
        time: '07:51:00',
        priceRaw: 1600000,
        pricedisplay: '1,600,000 تومان',
        level: 'پیشرفته',
        slug: 'asp-net'
    },
    {
        id: 2,
        image: bootCamp,
        title: 'بوت کمپ برنامه نویس شو',
        author: 'شجاعی',
        time: '38:30:00',
        priceRaw: 2925000,
        pricedisplay: '2,925,000 تومان',
        level: 'مقدماتی',
        slug: 'bootcamp-programming'
    },
    {
        id: 3,
        image: Micro,
        title: 'پیاده سازی صفر تا صد پروژه میکرو سرویس',
        author: 'نوری',
        time: '16:40:00',
        priceRaw: 0,
        pricedisplay: 'رایگانـ',
        level: 'متوسط',
        slug: 'micro-services'
    },
    {
        id: 4,
        image: Html,
        title: 'آموزش HTML از مقدماتی تا پیشرفته',
        author: 'سامانی',
        time: '03:18:00',
        priceRaw: 236000,
        pricedisplay: '236,000 تومان',
        level: 'مقدماتی',
        slug: 'html'
    },
    {
        id: 5,
        image: Css,
        title: 'آموزش ساخت سایت مزایده ای با Asp.net',
        author: 'شجاعی',
        time: '07:51:00',
        priceRaw: 1600000,
        pricedisplay: '1,600,000 تومان',
        level: 'پیشرفته',
        slug: 'css'
    },
    {
        id: 6,
        image: php,
        title: 'آموزش تامین امنیت در PHP',
        author: 'محسنی',
        time: '04:28:00',
        priceRaw: 0,
        pricedisplay: 'رایگانـ',
        level: 'متوسط',
        slug: 'php'
    },
    {
        id: 7,
        image: fastApi,
        title: 'آموزش مقدماتی تا پیشرفته FastAPI',
        author: 'عسگری',
        time: '00:44:00',
        priceRaw: 0,
        pricedisplay: 'رایگانـ',
        level: 'مقدماتی',
        slug: 'fastapi'
    },
    {
        id: 8,
        image: python,
        title: 'حل تمرین و مثال زبان پایتون',
        author: 'فغانی',
        time: '04:54:00',
        priceRaw: 100000,
        pricedisplay: '100,000 تومان',
        level: 'مقدماتی',
        slug: 'python'
    },
    {
        id: 9,
        image: tsQL,
        title: 'آموزش T-SQL از مبتدی تا پیشرفته',
        author: 'ملک محمدی',
        time: '02:42:00',
        priceRaw: 0,
        pricedisplay: 'رایگانـ',
        level: 'متوسط',
        slug: 'tsql'
    }
]
