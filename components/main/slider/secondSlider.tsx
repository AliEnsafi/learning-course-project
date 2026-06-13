import React from "react"

import SliderTheme from "./sliderTheme"

import { secondData } from "./Data"


const SecondSlider : React.FC = () => {

    return(

        <>
        <div className="bg-violet-700 mx-auto">

            {
                secondData.map((item) :any => {

                    const { id , title , description , image } = item

                    return <SliderTheme id={id} title={title} description={description} image={image} />

                })
            }

        </div>
        </>

    )

}


export default SecondSlider
