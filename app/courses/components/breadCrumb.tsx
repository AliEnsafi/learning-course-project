"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Breadcrumb = () => {

  const pathname = usePathname()

  const pathNames = pathname.split("/").filter((path) => path)

  return (
    <nav className="flex py-4 text-sm text-gray-600">
      <Link href="/" className="hover:text-blue-500">خانه</Link>

      {pathNames.map((link, index) => {

        const href = `/${pathNames.slice(0, index + 1).join("/")}`
        const isLast = index === pathNames.length - 1

        return (

          <div key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="text-gray-600">{decodeURIComponent(link)}</span>
            ) : (
              <Link href={href} className="hover:text-blue-500 capitalize">
                {decodeURIComponent(link)}
              </Link>
            )}
          </div>

        )
      })}
    </nav>
  )
}

export default Breadcrumb
