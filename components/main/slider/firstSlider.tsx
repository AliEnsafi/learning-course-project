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

<<<<<<< HEAD
                    return <SliderTheme key={id} id={id} title={title} description={description} image={image} />
=======
                    return <SliderTheme id={id} title={title} description={description} image={image} />
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

                })
            }

        </div>
        </>

    )

}


export default FirstSlider
