
import { IconType } from "react-icons"

import { FaPhone , FaEnvelope , FaMapMarked } from "react-icons/fa"


interface contactUs {

    id: number,
    icon : IconType,
    title: string,
    description: string

}

interface articleData {

    id: number,
    title: string,
    date: string,
    slug: string

}

export const articleData : articleData[] = [

    {
        id: 1,
        title: 'آشنایی با برنامه‌ نویسی',
        date: 'بهمن 9, 1400',
        slug: 'programming'
    },
    {
        id: 2,
        title: 'Google Colab چیست؟',
        date: 'بهمن 1, 1400',
        slug: 'google-colab'
    },
    {
        id: 3,
        title: 'آشنایی با ترندهای تکنولوژی در سال 2022',
        date: ' 1400 , 14 آذر',
        slug: 'tech-trend'
    }

]

export const contactUs :contactUs[] = [

    {
        id: 1,
        icon: FaPhone,
        title: 'تلفن تماس',
        description: '021-44750000'
    },
    {
        id: 2,
        icon: FaEnvelope,
        title: 'آدرس ایمیل',
        description: 'AliEnsafi@gmail.com'
    },
    {
        id: 3,
        icon: FaMapMarked,
        title: 'نشانی',
        description: 'تهران، میدان فردوسی'
    }

]
