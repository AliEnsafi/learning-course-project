import React from "react"

import { data } from "./data"
import WhyUsTheme from "./whyUsTheme"


const WhyUs : React.FC = () => {

    return(

        <>
        <div className="container text-center my-28 space-y-10">
            <div className="whyus-title">
                <h2 className="text-2xl">چرا ما را انتخاب کنید؟</h2>
            </div>
            <div className="whyus-desc w-full flex justify-center content-center ">
                <p className="font-extralight opacity-60 w-2/3">
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
            <div className="whyus-theme mt-8">
                <div className="flex flex-wrap justify-center items-center space-y-10 lg:space-y-0 ">
                    {
                        data.map((item) : any => {

                            const {id , title , description} = item

<<<<<<< HEAD
                            return <WhyUsTheme key={id} id={id} title={title} description={description} />
=======
                            return <WhyUsTheme id={id} title={title} description={description} />
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
                        })
                    }
                </div>
            </div>
        </div>
        </>

    )

}

export default WhyUs
