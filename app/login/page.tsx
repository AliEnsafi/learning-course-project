import Link from "next/link"
import React from "react"
import LoginTheme from "./components/loginTheme"


const LoginPage : React.FC = () => {

    return(
        <>

        <div className="min-h-full min-w-full flex justify-center content-center">

            <LoginTheme />
        </div>

        </>
    )

}


export default LoginPage
