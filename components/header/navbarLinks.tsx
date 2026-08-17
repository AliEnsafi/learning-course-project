"use client"

import React from "react"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

import { useAuthUser } from "@/hooks/useAuthUser"

type ChildProps = { isOpen: boolean }
type AuthUser = ReturnType<typeof useAuthUser>["user"]

function AuthMenuLink({
    variant,
    user,
    isLoading,
}: {
    variant: "desktop" | "mobile"
    user: AuthUser
    isLoading: boolean
}) {
    if (isLoading) return null

    if (variant === "desktop") {
        if (!user) {
            return (
                <li className="flex justify-center space-x-0.5">
                    <Link className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href='/login'> ورود </Link>
                    <p>/</p>
                    <Link className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href='/register'> ثبت نام </Link>
                </li>
            )
        }

        return (
            <li className="flex justify-center space-x-0.5">
                <Link className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href='/dashboard'>
                    ناحیه کاربری
                </Link>
            </li>
        )
    }

    if (!user) {
        return (
            <div className="flex justify-center space-x-1">
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/login'>ورود</Link>
                <p>/</p>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/register'>ثبت نام</Link>
            </div>
        )
    }

    return (
        <div className="flex justify-center space-x-1">
            <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/dashboard'>
                ناحیه کاربری
            </Link>
        </div>
    )
}


const NavbarLinks : React.FC<ChildProps> = (props) => {

    const { isOpen } = props
    const { user, isLoading } = useAuthUser()

    return(

        <>
            <div className="nav-menu mt-2 opacity-80 hidden lg:flex">
                <ul className="flex space-x-8">
                    <li className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        <Link href='/'> خانه </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        <Link href='/courses'> دوره ها </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        <Link href='/blogs'> وبلاگ </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        <Link href='/about-us'> درباره ما </Link>
                    </li>
                    <li className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        <Link href='/contact-us'> تماس با ما </Link>
                    </li>
                    <AuthMenuLink variant="desktop" user={user} isLoading={isLoading} />
                </ul>
            </div>

            <div className={`
                            fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900
                            flex flex-col items-center justify-center gap-8
                            transform divide-y-2 divide-gray-200 dark:divide-gray-700
                            transition-transform duration-500 ease-in-out
                            ${isOpen ? "translate-x-0" : "-translate-x-full"} `}>

                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/'> خانه </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/courses'> دوره ها </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/blogs'> وبلاگ </Link>
                <Link className="cursor-pointer hover:text-violet-600 transition-colors" href='/about-us'> درباره ما </Link>
                <Link className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href='/contact-us'> تماس با ما </Link>
                <AuthMenuLink variant="mobile" user={user} isLoading={isLoading} />
            </div>
        </>

    )

}

export default NavbarLinks
