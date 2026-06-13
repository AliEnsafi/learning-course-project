import { sideAdvanced } from "./data"


const SideAdvancedTheme = () => {

    return(

            <div className="mt-10 border border-gray-200 rounded-xl w-full">
                <div className="filter-time bg-violet-500 text-white rounded-t-xl">
                    <div className="time-title border-b border-gray-200 text-center py-5">
                        <h2 className="text-xl">مرتب سازی بر اساس</h2>
                    </div>
                </div>

                <div className="time-checkbox">
                    <div className="flex flex-col items-center gap-6 p-4">

                        {
                            sideAdvanced.map((item) : any => {

                                return(

                                    <label className="flex items-start cursor-pointer">
                                        <input type="checkbox" className="hidden peer"/>
                                        <span className="w-60 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 font-medium
                                                    hover:bg-violet-600 hover:text-white transition-colors has-checked:bg-blue-600
                                                    has-checked:text-white has-checked:border-blue-600 text-center">
                                                        {item}
                                                    </span>
                                    </label>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default SideAdvancedTheme
