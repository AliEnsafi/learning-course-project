import React from "react"

import { FaAngleDoubleLeft , FaUserCircle } from "react-icons/fa"

import { reactionProps } from "./data"


const ReactionTheme : React.FC<reactionProps> = (props) => {

    const { id , name , age , city , massage } = props

    return(

        <>
        <div key={id} className="user-massage flex-col space-y-10 px-18 py-10 shadow-sm select-none">

            <div className="user-info flex justify-start">

                <div className="user-fullinfo flex justify-start content-center">

                    <div className="user-img w-10 h-10 mt-2">
                        <FaUserCircle />
                    </div>
                    <div className="user-fullname space-y-2 text-sm mt-1">
                        <div className="user-name">{name}</div>
                        <div className="user-otherinfo flex space-x-2 font-extralight opacity-60">
                            <div className="user-age">{age} ساله</div>
                            <span className="w-0.5 h-4 bg-violet-500 rounded-lg py-0.5"></span>
                            <div className="user-city">{city}</div>
                        </div>
                    </div>

                </div>

                <div className="theme-icon text-violet-600 mt-1">
                    <FaAngleDoubleLeft />
                </div>
            </div>

            <div className="user-desc text-sm font-extralight opacity-70 text-justify">
                {massage}
            </div>

        </div>
        </>

    )

}



export default ReactionTheme
