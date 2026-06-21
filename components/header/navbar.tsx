"use client"

import { useEffect, useState } from "react"

import { FaRegFile } from "react-icons/fa"

import Image from "next/image"
import navImage from "./../../public/Images/logo-academy.png"

import Link from "next/link"
import NavbarLinks from "./navbarLinks"
import HambergerBtn from "./hambegerBtn"


const Navbar: React.FC = (props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [isOpen]);

  const [showMenu, setShowMenu] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setShowMenu(true)
      } else if (currentScrollY > lastScrollY) {

        setShowMenu(false)
      } else {

        setShowMenu(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (

    <>
      <nav
        className={`container lg:flex lg:justify-around z-40 bg-white py-2
                        fixed top-0 left-0 min-w-full shadow-sm transition-transform duration-300
                        ${showMenu ? "translate-y-0" : "-translate-y-full"} `}
      >
        <div className="flex space-x-0 lg:space-x-8 justify-between mx-4">
          <HambergerBtn isOpen={isOpen} toggle={toggleMenu} />

          <div className="nav-img cursor-pointer z-50">
            <Image src={navImage} alt="navImage" />
          </div>

          <NavbarLinks isOpen={isOpen} />
        </div>

        <div className="hidden lg:flex nav-course-btn space-x-1 text-white bg-violet-700 px-5 py-2 rounded-md hover:bg-violet-800 transition-colors cursor-pointer">
          <FaRegFile className="mt-1" />
          <Link href='/blogs' className="cursor-pointer">دوره های ما</Link>
        </div>
      </nav>
    </>

  )

}

export default Navbar
