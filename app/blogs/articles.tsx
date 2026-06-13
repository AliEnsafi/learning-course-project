import React from "react"

import ArticleTheme from "./articleTheme"


const Articles : React.FC = () => {

    return(

        <>
        <div className="container flex-col my-36">

            <div className="reaction-title flex justify-start space-x-24">
                <div className="flex space-x-3 justify-center w-1/4">
                    <span className="w-2 h-10 bg-violet-500 rounded-3xl py-2"></span>
                    <div className="text-lg lg:text-2xl font-bold content-center">کل مقالات</div>
                </div>
            </div>

            <ArticleTheme />
        </div>
        </>

    )

}


export default Articles
