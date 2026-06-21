"use client"

import React from "react"
import { HiMenu, HiX } from "react-icons/hi"

interface ChildProps {
  isOpen: boolean
  toggle: () => void
}


const HambergerBtn: React.FC<ChildProps> = (props) => {
  const { isOpen, toggle } = props

  return (
    <>
      <button
        onClick={toggle}
        className="nav-burgermenu lg:hidden mt-1 text-xl text-blue-700 cursor-pointer z-50
                                transition-all duration-500 ease-in-out transform"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div
            className={`absolute transition-all duration-500 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          >
            <HiMenu size={28} />
          </div>

          <div
            className={`absolute transition-all duration-500 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          >
            <HiX size={28} />
          </div>
        </div>
      </button>
    </>
  );
};

export default HambergerBtn
