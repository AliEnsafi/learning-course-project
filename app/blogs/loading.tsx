
export default function Loading() {

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md transition-all duration-500">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-700 font-medium text-lg animate-pulse">
          در حال آماده‌سازی اطلاعات...
        </p>
      </div>
    </div>

  )
}
