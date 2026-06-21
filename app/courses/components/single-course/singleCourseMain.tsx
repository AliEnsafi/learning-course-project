import React from "react"

import Breadcrumb from "../breadCrumb"

import { FaUserTie } from "react-icons/fa"


const SingleCourseMain = (props : any) => {

    const { id , title , author } = props

    return(
        <section key={id} className="w-full lg:w-4/5">
            <Breadcrumb />

            <div className="flex-col space-y-8 mt-5">
                <h2 className="text-2xl"> {title} </h2>
                <div className="flex space-x-3 text-gray-500 text-xl">
                    <FaUserTie />
                    <p> {author} </p>
                </div>
            </div>

            <div className="explain mt-14 space-y-10">
                <div className="explain-title">
                    <p className="text-2xl font-semibold border-b-2 border-violet-700 w-40 pb-2">توضیحات دوره</p>
                </div>
                <div className="explain-desc">
                    <p className="font-extralight text-gray-600 opacity-75 text-justify leading-relaxed">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                      چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای م
                     تنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                      و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                       در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مو
                      رد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                      لورم ایپسوم متن ساختگی
                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                       سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                       کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                     شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                     در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                     حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </div>

            <div className="flex-col space-y-10 my-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-900">نظرات</h2>
                </div>
                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                        <label htmlFor="comment" className="sr-only">نظر شما</label>
                        <textarea id="comment" rows={6}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                            placeholder="نظر خود را اینجا وارد کنید..." required></textarea>
                    </div>

                    <div className="nav-course-btn text-white bg-violet-700 px-5 py-2 rounded-md hover:bg-violet-800 transition-colors cursor-pointer w-20 text-center">
                        <button className="cursor-pointer">ارسال</button>
                    </div>
                </form>
                </div>
        </section>
    )
}

export default SingleCourseMain
