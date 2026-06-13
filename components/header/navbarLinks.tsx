import React from "react"

import Link from "next/link"


type ChildProps = { isOpen: boolean }


const NavbarLinks : React.FC<ChildProps> = (props) => {

    const { isOpen } = props


    return(

        <>
            {/* desktop menu */}
            <div className="nav-menu mt-2 opacity-80 hidden lg:flex">
                <ul className="flex space-x-8">
                    <li className="cursor-pointer hover:text-violet-600 transition-colors">
                        <Link href='/'> خانه </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 transition-colors">
                        <Link href='/courses'> دوره ها </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 transition-colors">
                        <Link href='/blogs'> وبلاگ </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 transition-colors">
                        <Link href='/about-us'> درباره ما </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 transition-colors">
                        <Link href='/contact-us'> تماس با ما </Link>
                    </li>
                    <li className="flex justify-center space-x-0.5">
                        <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/login'> ورود </Link>
                        <p>/</p>
                        <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/register'> ثبت نام </Link>
                    </li>
                </ul>
            </div>


            <div className={`
                            fixed top-0 left-0 w-full h-screen bg-white
                            flex flex-col items-center justify-center gap-8
                            transform divide-y-2 divide-gray-200
                            transition-transform duration-500 ease-in-out
                            ${isOpen ? "translate-x-0" : "-translate-x-full"} `}>

                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/'> خانه </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/courses'> دوره ها </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/blogs'> وبلاگ </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/about-us'> درباره ما </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/contact-us'> تماس با ما </Link>
                <div className="flex justify-center space-x-1">
                    <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/login'>ورود</Link>
                    <p>/</p>
                    <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/register'>ثبت نام</Link>
                </div>
            </div>
        </>

    )

}


export default NavbarLinks
