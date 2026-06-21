import React from "react"

import FormTheme from "./formTheme"

const ContactForm : React.FC = () => {

    return(
        <>

        <div>
            <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-gray-300"></div>
                    <h2 className="font-bold text-gray-700">
                     تماس با ما
                    </h2>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div>
                <FormTheme />
            </div>
        </div>

        </>
    )
}

export default ContactForm
