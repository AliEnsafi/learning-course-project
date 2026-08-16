import React, { Suspense } from "react"
import LoginTheme from "./components/loginTheme"

const LoginPage : React.FC = () => {

    return(
        <>

        <div className="min-h-full min-w-full flex justify-center content-center">

            <Suspense fallback={null}>
                <LoginTheme />
            </Suspense>
        </div>

        </>
    )

}

export default LoginPage
