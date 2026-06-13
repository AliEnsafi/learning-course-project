import React from "react"

import { contactUs } from "./data"



const ContactUs : React.FC = () => {


    return(

        <>
        <div className="contact-us space-y-8">

            <div className="contact-us-title">
                <h2 className="text-xl">
                            ارتباط با ما
                </h2>
            </div>
            {

                contactUs.map((item) : any => {

                    const Icon = item.icon
                    const { id , title , description } = item

                    return(

                        <div key={id} className="contact-phone flex justify-start space-x-4 content-center">
                            <div className="phone-icon flex justify-center items-center text-violet-500 border w-10 rounded-xl">
                                <Icon />
                            </div>
                            <div className="phone-data space-y-1">
                                <h2 className="phone-title opacity-80">{title}</h2>
                                <p className="phone-number text-sm opacity-60">{description}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
        </>

    )
}


export default ContactUs
