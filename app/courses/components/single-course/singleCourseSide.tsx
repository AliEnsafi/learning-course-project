import Image from "next/image"

import { FaUser , FaSignal , FaClock , FaAward , FaBookReader , FaRegQuestionCircle } from "react-icons/fa"

import AddToCartButton from "@/components/cart/AddToCartButton"
import PersianNumber from "@/components/persianNumber"


const SingleCourseSide = (props : any) => {

    const {key , id, title, slug, imageUrl , author , price , priceRaw, time , level } = props

    const numericPrice =
      typeof priceRaw === "number"
        ? priceRaw
        : Number(String(price ?? "").replace(/[^\d]/g, "")) || 0

    return(
        <>
        <section key={key} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-10 py-5 rounded-md space-y-10 w-96">
            <div className="flex-col space-y-6 items-center justify-center">
                <div>
                    <h2 className="courseside-title text-xl text-center font-bold">اطلاعات دوره</h2>
                </div>
                <div className="courseside-img rounded">
                    <Image src={imageUrl} alt={price} width={300} height={180} />
                </div>
                <div className="font-semibold text-violet-700 dark:text-violet-400 text-center">
                    <PersianNumber>{price}</PersianNumber>
                </div>
                <div className="courseside-btn">
                    <AddToCartButton
                      course={{
                        id: String(id),
                        slug,
                        title,
                        price: numericPrice,
                        priceDisplay: price ?? "",
                      }}
                    />
                </div>
            </div>
            <div className="courseside-desc text-violet-950 dark:text-violet-200 space-y-5">
                <div className="courseside-author flex space-x-2 items-center">
                    <FaUser />
                    <p> {author} </p>
                </div>
                <div className="courseside-level flex space-x-2 items-center">
                    <FaSignal />
                    <p> {level} </p>
                </div>
                <div className="courseside-time flex space-x-2 items-center">
                    <FaClock />
                    <p> {time} </p>
                </div>
                <div className="courseside-Certificate flex space-x-2 items-center">
                    <FaAward />
                    <p>گواهی پایان دوره</p>
                </div>
                <div className="courseside-access flex space-x-2 items-center">
                    <FaBookReader />
                    <p>دسترسی همیشگی</p>
                </div>
                <div className="courseside-test flex space-x-2 items-center">
                    <FaRegQuestionCircle />
                    <p>آزمون در انتهای دوره</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default SingleCourseSide
