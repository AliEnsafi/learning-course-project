
import CategoryItems from "./categoryItems"

const CourseCategory = () => {

    return(

        <>
        <div className="container flex-col mt-20">

            <div className="reaction-title flex justify-start space-x-24">
                <div className="flex space-x-3 justify-center w-1/4">
                    <span className="w-2 h-10 bg-violet-500 rounded-3xl py-2"></span>
                    <div className="text-lg lg:text-2xl font-bold content-center">دسته بندی</div>
                </div>
            </div>
            <CategoryItems />

        </div>
        </>

    )

}


export default CourseCategory
