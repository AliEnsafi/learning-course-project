import Image, { StaticImageData } from "next/image"

import { FaTelegram , FaInstagram , FaYoutube , FaTwitter } from "react-icons/fa"


const SingleBlogTheme = ( {blog} : any ) => {

  const { title , imageUrl } = blog

    return(

        <>
        <div className="w-full my-36">
            <div className="container w-full lg:w-3/5 border border-slate-200 rounded-md p-10 lg:mr-28 space-y-10">
                <div className="blog-item flex-col space-y-10">
                    <div className="blog-title">
                        <h2 className="text-xl font-bold"> {title} </h2>
                    </div>
                    <div className="blog-img">
                      <Image src={imageUrl} alt={title} width={500} height={300} />
                    </div>
                    <div className="blog-desc">
                        <p className="font-extralight opacity-55 text-justify">
                            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                    <div className="blog-desc">
                        <p className="font-extralight opacity-55 text-justify">
                            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                    <div className="blog-desc">
                        <p className="font-extralight opacity-55 text-justify">
                            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                </div>
                <div className="blog-comments flex-col space-y-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900">نظرات</h2>
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
                <div className=" blog-share flex justify-between border-t border-gray-200 pt-10">
                    <div className="blog-share-title text-sm">
                        <p>اشتراک گذاری</p>
                    </div>
                    <div className="blog-share-icon social-accounts flex justify-start mr-1.5 space-x-3 text-violet-950">
                        <FaInstagram className="cursor-pointer hover:text-violet-600 transition-colors" />
                        <FaTelegram className="cursor-pointer hover:text-violet-600 transition-colors" />
                        <FaTwitter className="cursor-pointer hover:text-violet-600 transition-colors" />
                        <FaYoutube className="cursor-pointer hover:text-violet-600 transition-colors" />
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}


export default SingleBlogTheme
