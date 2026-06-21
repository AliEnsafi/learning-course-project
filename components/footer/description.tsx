import React from "react"

import Image from "next/image"
import logo from './../../public/Images/logo-academy.png'

import { FaTelegram , FaInstagram , FaYoutube , FaTwitter } from "react-icons/fa"
import Link from "next/link"


const Description : React.FC = () => {

    return(

        <>
                <div className="about-us space-y-8 w-full lg:w-1/3">

                    <div className="logo">
                        <Image src={logo} alt="logo" />
                    </div>

                    <div className="social-accounts flex justify-start text-lg mr-1.5 space-x-3 text-violet-950">

                        <FaInstagram className="cursor-pointer hover:text-violet-600 transition-colors" />
                        <FaTelegram className="cursor-pointer hover:text-violet-600 transition-colors" />
                        <FaTwitter className="cursor-pointer hover:text-violet-600 transition-colors" />
                        <FaYoutube className="cursor-pointer hover:text-violet-600 transition-colors" />

                    </div>

                    <div className="desc">
                        <p className="text-sm font-extralight text-justify opacity-55">
                            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. برای تغییر این متن بر روی دکمه ویرایش کلیک کنید.
                             لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. دکمه ویرایش کلیک کنید با نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>

                    <div className="nav">
                        <ul className="flex space-x-6 text-sm opacity-70">
                            <li className="cursor-pointer hover:text-violet-600 transition-colors">
                                <Link href='/blogs'>وبلاگ</Link>
                            </li>
                            <li className="cursor-pointer hover:text-violet-600 transition-colors">
                                <Link href='/about-us'>درباره ما</Link>
                            </li>
                            <li className="cursor-pointer hover:text-violet-600 transition-colors">
                                <Link href="/contact-us">تماس با ما</Link>
                            </li>
                            <li className="flex justify-center space-x-0.5">
                                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/login'> ورود </Link>
                                <p>/</p>
                                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/register'> ثبت نام </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </>

    )


}


export default Description
