import { StaticImageData } from "next/image"

import programming from './../../public/Images/new/programming.jpg'
import googleColab from './../../public/Images/new/google-colab.jpg'
import techTrend from './../../public/Images/new/technology.jpg'
import matlab from './../../public/Images/new/matlab.jpg'
import seoProgram from './../../public/Images/new/seo.jpg'
import Typescript from './../../public/Images/new/type.jpg'
import Api from './../../public/Images/new/api.jpg'
import top10Language from './../../public/Images/new/program-language.jpg'



export interface articleDataProps {

    id: number,
    image: string | StaticImageData,
    slug: string,
    title: string,
    description: string,
    writer: string,
    views: number,
    comments: number

}

export const articleData : articleDataProps[] = [

    {
        id: 1,
        image: programming,
        slug: 'programming',
        title: 'آشنایی با برنامه‌ نویسی',
        description: 'در دنیای امروزی، اکثر مشاغل و کار‌ها با کامپیوتر‌ها پیوندی جدا نشدنی پیدا کرده‌اند به گونه‌ای که علوم کامپیوتری لازمه‌ای برای زنده',
        writer: 'تیم ما',
        views: 6151,
        comments: 12
    },
    {
        id: 2,
        image: googleColab,
        slug: 'google-colab',
        title: 'Google Colab چیست؟',
        description: 'زبان برنامه نویسی پایتون (Python) را کم وبیش اکثر برنامه نویس ها و مهندسان جهان می شناسند. و بیشتر تکنولوژی از جمله',
        writer: 'تیم ما',
        views: 8568,
        comments: 6
    },
    {
        id: 3,
        image: techTrend,
        slug: 'tech-trend',
        title: 'آشنایی با ترندهای تکنولوژی در سال 2022',
        description: 'امروزه صنعت تکنولوژی روز به روز در حال پیشرفت است و شاهد آن هستیم که هر روزه ترندهای تکنولوژی در حال پیشرفت هستند.',
        writer: 'علی انصافی',
        views: 5057,
        comments: 12
    },
    {
        id: 4,
        image: matlab,
        slug: 'matlab',
        title: 'نرم افزار متلب چیست و چه کاربردی دارد؟',
        description: 'اگر در هر یک از رشته های مهندسی تحصیل می کنید احتمالا نام نرم افزار متلب به گوش شما آشنا باشد در این مقاله قصد دارم شما را با',
        writer: 'علی انصافی',
        views: 4990,
        comments: 12
    },
    {
        id: 5,
        image: seoProgram,
        slug: 'seo-programmer',
        title: 'چرا یک سئو کار باید برنامه نویس خوبی باشد؟',
        description: 'همانطور که می دانید سئو یکی از مهم ترین عوامل موفقیت در کسب و کار های اینترنتی می باشد. امروزه شاهد بیزینس های فراوانی',
        writer: 'علی انصافی',
        views: 4847,
        comments: 4
    },
    {
        id: 6,
        image: Typescript,
        slug: 'why-typescript',
        title: '8 دلیل انتخاب تایپ اسکریپت در سال 2022',
        description: 'TypeScript به یک زبان محبوب برای توسعه برنامه‌های بزرگ تبدیل شده است. تایپ اسکریپت جاوااسکریپت جدید است، درست',
        writer: 'تیم ما',
        views:  7187,
        comments: 6
    },
    {
        id: 7,
        image: Api,
        slug: 'free-tools-api',
        title: '12 ابزار رایگان برای طراحی API و تست آن',
        description: 'ظهور API های RESTful با افزایش ابزارهایی برای ایجاد، آزمایش و مدیریت آنها همراه شده است. فرقی نمی کند که شما یک شخص',
        writer: 'تیم ما',
        views: 10348,
        comments: 8
    },
    {
        id: 8,
        image: top10Language,
        slug: 'top-10-language-in-2022',
        title: '10 زبان برنامه نویسی محبوب برای یادگیری در سال 2022',
        description: 'یک زبان برنامه نویسی در واقع یک ابزار ارتباطی بین انسان و کامپیوتر است که برای انجام وظایف مشخصی مورد استفاده قرار می',
        writer: 'تیم ما',
        views: 4133,
        comments: 10
    }
]
