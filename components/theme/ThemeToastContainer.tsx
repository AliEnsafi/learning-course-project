"use client"

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { useTheme } from "@/components/theme/ThemeProvider"

export function ThemeToastContainer() {
  const { theme } = useTheme()

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  )
}
