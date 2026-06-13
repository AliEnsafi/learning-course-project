import React from "react"

import Information from "./information"
import ContactForm from "./forms/contactForm"

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"

const Contact : React.FC = () => {

     return(
        <>
        <section className="grid lg:grid-cols-2 gap-10 my-36 ">

            <Information />

            <ContactForm />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </section>
        </>
    )
}

export default Contact
