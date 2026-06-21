import React from "react"

import { contactData } from "./data"

const Information : React.FC = () => {

    return(
        <>
        <div className="w-full space-y-5">
            {
                contactData.map((item) => {

                    const Icon = item.icon
                    const { id ,title , desc1 , desc2 } = item

                    return(

                    <div key={id} className="container border border-slate-200 rounded-md p-10 lg:mr-5 space-y-10">
                        <div className="aboutUs-item flex-col space-y-3">
                            <div className="aboutUs-title text-lg flex items-center space-x-2 text-violet-600 my-5">
                                <Icon />
                                <h2 className="font-bold"> {title} </h2>
                            </div>
                            <div className="aboutUs-desc">
                                <p className="font-extralight opacity-55 text-justify"> {desc1} </p>
                            </div>
                            <div className="aboutUs-desc">
                                <p className="font-extralight opacity-55 text-justify"> {desc2} </p>
                            </div>
                        </div>
                    </div>

                    )
                })
            }
        </div>
        </>
    )
}

export default Information
