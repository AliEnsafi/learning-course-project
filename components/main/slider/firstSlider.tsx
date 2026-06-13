import React from "react"

import SliderTheme from "./sliderTheme"

import { firstData } from "./Data"


const FirstSlider : React.FC = () => {


    return(

        <>
        <div className="w-full bg-violet-700">

            {
                firstData.map((item) :any => {

                    const { id , title , description , image } = item

                    return <SliderTheme id={id} title={title} description={description} image={image} />

                })
            }

        </div>
        </>

    )

}


export default FirstSlider
