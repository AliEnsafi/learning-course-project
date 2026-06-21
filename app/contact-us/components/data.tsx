
import { IconType } from "react-icons"
import { FaPhone , FaUser } from "react-icons/fa"


interface contactDataType {

    id: number
    icon: IconType
    title: string,
    desc1: string,
    desc2: string

}

export const contactData : contactDataType[] = [

    {
        id: 1,
        icon: FaPhone,
        title: 'راه های ارتباطی',
        desc1: ' تلفن: 09195614718',
        desc2: ' ایمیل: aliensafi2001@gmail.com'
    },
    {
        id: 2,
        icon: FaUser,
        title: 'مدیر موسسه',
        desc1: 'نام و نام خانوادگی: علی انصافی',
        desc2: ' ایمیل: aliensafi2001@gmail.com'
    },
    {
        id: 3,
        icon: FaUser,
        title: 'مدیر آموزش',
        desc1: 'تلفن: 09195614718',
        desc2: ' ایمیل: aliensafi2001@gmail.com'
    }
]
