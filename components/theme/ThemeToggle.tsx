"use client"

import { HiMoon, HiSun } from "react-icons/hi"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "فعال‌سازی حالت روشن" : "فعال‌سازی حالت تاریک"}
      className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-600
                 text-violet-700 dark:text-violet-300 bg-gray-50 dark:bg-gray-800
                 hover:bg-violet-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
    >
      {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  )
}
