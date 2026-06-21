import React from "react"


import Description from "./description"
import LastArticles from "./lastArticles"
import ContactUs from "./contactUs"




const Footer : React.FC = () => {


    return(

        <>
        <section className="footer">

            <div className="container space-y-10 lg:flex lg:justify-center lg:space-x-48">

                <Description />

                <LastArticles />

                <ContactUs />

            </div>

        </section>
        </>
    )


}


export default Footer
