import { IconType } from "react-icons"

import { FaPython , FaLanguage , FaFilePowerpoint , FaWordpress , FaFileWord } from "react-icons/fa";
import { PiMathOperations } from "react-icons/pi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BiCalculator } from "react-icons/bi";



interface category {

    id: number,
    icon: IconType,
    title: string

}

export const categories : category[] = [

    {
        id: 1,
        icon: FaFileWord,
        title: 'آموزش ورد'
    },
    {
        id: 2,
        icon: FaFilePowerpoint,
        title: 'آموزش پاورپوینت'
    },
    {
        id: 3,
        icon: FaWordpress,
        title: 'آموزش وردپرس'
    },
    {
        id: 4,
        icon: FaLanguage,
        title: 'آموزش زبان خارجه'
    },
    {
        id: 5,
        icon: HiMiniComputerDesktop,
        title: 'آموزش طراحی سایت'
    },
    {
        id: 6,
        icon: FaPython,
        title: 'آموزش پایتون'
    },
    {
        id: 7,
        icon: PiMathOperations,
        title: 'آموزش محاسبات'
    },
    {
        id: 8,
        icon: BiCalculator,
        title: 'آموزش حسابداری'
    }
]
