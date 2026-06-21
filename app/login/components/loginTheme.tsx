"use client"

import React, { useState } from "react"
import Link from "next/link"

import { useContactLogin } from "./loginValidate"
import { FaEye } from "react-icons/fa"
import { BiHide } from "react-icons/bi"

import Image from "next/image"
import loginImg from "./../../../public/Images/new/login.jpg"


const LoginTheme : React.FC = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)


    const { formik } = useContactLogin()

    return(
        <>
        <div className="w-lg flex flex-col justify-center border border-gray-200 rounded  px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image src={loginImg} alt="loginImage" className="mx-auto h-20 w-20" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">صفحه ورود</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium">آدرس ایمیل</label>

                        <div className="mt-2">

                            <input id="email" type="email" name="email" required autoComplete="email"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                            className="block w-full rounded-md px-3 py-1.5 text-base outline-none outline-white/10
                                      ring ring-gray-200 sm:text-sm/6" />

                            {
                                formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                )
                            }

                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">

                            <label htmlFor="password" className="block text-sm/6 font-medium ">رمز عبور</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-violet-600 hover:text-violet-800">فراموشی رمز عبور؟</a>
                            </div>

                        </div>
                        <div className="mt-2">

                            <div className="relative">
                                <input id="password" type={showPassword ? "string" : "password"} name="password" required autoComplete="current-password"
                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
                                       className="block w-full rounded-md px-3 py-1.5 text-base outline-none outline-white/10
                                                   ring ring-gray-200 sm:text-sm/6" />

                                <button className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onMouseDown={ () => setShowPassword(true) }
                                        onMouseUp={ () => setShowPassword(false) }
                                        onMouseLeave={ () => setShowPassword(false) }
                                        >
                                    { showPassword ? <FaEye /> : <BiHide /> }
                                </button>
                            </div>

                            {
                                formik.touched.password && formik.errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                                )
                            }
                    </div>
                    </div>

                    <div>
                        <button type="submit" disabled={formik.isSubmitting} className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-violet-800 transition-colors cursor-pointer">
                        { formik.isSubmitting ? "در حال انجام" : " ورود " }
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-violet-600 hover:text-violet-800 transition-colors cursor-pointer text-sm text-center mt-10 lg:mt-7">
                <Link href={'/'}>بازگشت به صفحه اصلی</Link>
            </div>
            <div className="text-sm text-center mt-6 lg:mt-5
                                  flex justify-center space-x-2">
                <p>حساب کاربری ندارید؟</p>
                <Link href={'/register'} className="text-violet-600 hover:text-violet-800 transition-colors cursor-pointer">ثبت نام</Link>
            </div>
        </div>
        </>
    )
}

export default LoginTheme
