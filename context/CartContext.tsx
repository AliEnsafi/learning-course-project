"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { useAuthUser } from "@/hooks/useAuthUser"
import { CartCourse, CartItem } from "@/types/cart.types"

type AddItemResult = "added" | "already-in-cart" | "requires-login"

interface CartContextValue {
  items: CartItem[]
  totalPrice: number
  isReady: boolean
  addItem: (course: CartCourse) => AddItemResult
  removeItem: (courseId: string) => void
  clearCart: () => void
  isInCart: (courseId: string) => boolean
}

const CartContext = createContext<CartContextValue | null>(null)

function getStorageKey(userId: string) {
  return `cart:${userId}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { user, isLoading: isAuthLoading } = useAuthUser()
  const [items, setItems] = useState<CartItem[]>([])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isAuthLoading) return

    if (!user) {
      setItems([])
      setIsReady(true)
      return
    }

    try {
      const raw = localStorage.getItem(getStorageKey(user.id))
      setItems(raw ? (JSON.parse(raw) as CartItem[]) : [])
    } catch {
      setItems([])
    } finally {
      setIsReady(true)
    }
  }, [user, isAuthLoading])

  useEffect(() => {
    if (!user || !isReady) return
    localStorage.setItem(getStorageKey(user.id), JSON.stringify(items))
  }, [items, user, isReady])

  const addItem = (course: CartCourse): AddItemResult => {
    if (!user) return "requires-login"

    let result: AddItemResult = "added"

    setItems((prev) => {
      if (prev.some((item) => item.id === course.id)) {
        result = "already-in-cart"
        return prev
      }
      return [...prev, { ...course }]
    })

    return result
  }

  const removeItem = (courseId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== courseId))
  }

  const clearCart = () => setItems([])

  const isInCart = (courseId: string) => items.some((item) => item.id === courseId)

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items],
  )

  const value: CartContextValue = {
    items,
    totalPrice,
    isReady,
    addItem,
    removeItem,
    clearCart,
    isInCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }
  return context
}
