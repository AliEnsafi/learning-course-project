import React from "react"

import { FaAngleLeft , FaAngleRight } from "react-icons/fa"
import ReactionTheme from "./reactionTheme"

import { reactionData } from "./data"




const Reactions : React.FC = () => {


    return(

        <>
        <div className="container my-20 flex-col space-y-10">

            <div className="reaction-title flex justify-between space-x-24">
                <div className="flex space-x-3 w-2/5 md:w-1/5 justify-start md:justify-center">
                    <span className="w-2 h-10 bg-violet-500 rounded-3xl py-2"></span>
                    <div className="text-lg lg:text-2xl font-semibold content-center">از زبان شما</div>
                </div>

                <div className="hidden md:flex md:space-x-4 w-1/5 justify-center content-center items-center text-violet-600">
                    <FaAngleRight className="text-2xl cursor-pointer" />
                    <FaAngleLeft className="text-2xl cursor-pointer" />
                </div>

            </div>

            <div className="reaction-users container space-y-10 lg:space-y-0 lg:flex lg:justify-around">
                {
                    reactionData.map((item) : any => {

                        const { id , name , age , city , massage } = item

                        return <ReactionTheme key={id} id={id} name={name} age={age} city={city} massage={massage}/>
                    })
                }
            </div>
        </div>
        </>

    )


}

export default Reactions
