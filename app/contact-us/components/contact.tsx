import React from "react"

import Information from "./information"
import ContactForm from "./forms/contactForm"

import { ThemeToastContainer } from "@/components/theme/ThemeToastContainer"

const Contact : React.FC = () => {

     return(
        <>
        <section className="grid lg:grid-cols-2 gap-10 my-36 ">

            <Information />

            <ContactForm />

            <ThemeToastContainer />

        </section>
        </>
    )
}

export default Contact
