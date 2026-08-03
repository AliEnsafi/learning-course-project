"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored

  return null
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light"

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const initialTheme = getStoredTheme() ?? getPreferredTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const nextTheme = current === "light" ? "dark" : "light"
      localStorage.setItem("theme", nextTheme)
      applyTheme(nextTheme)
      return nextTheme
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
