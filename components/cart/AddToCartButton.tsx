"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaCheck, FaShoppingCart } from "react-icons/fa"

import { useCart } from "@/context/CartContext"
import { useAuthUser } from "@/hooks/useAuthUser"
import { CartCourse } from "@/types/cart.types"

export default function AddToCartButton({ course }: { course: CartCourse }) {
  const router = useRouter()
  const { user } = useAuthUser()
  const { addItem, isInCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const alreadyInCart = isInCart(course.id)

  function handleClick() {
    if (!user) {
      router.push("/login")
      return
    }

    const result = addItem(course)
    if (result === "added") {
      setJustAdded(true)
      setTimeout(() => setJustAdded(false), 1500)
    }
  }

  if (alreadyInCart) {
    return (
      <button
        type="button"
        disabled
        className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-200 px-4 py-2 text-sm font-medium text-slate-600 dark:bg-gray-700 dark:text-slate-300"
      >
        <FaCheck aria-hidden="true" />
        <span>در سبد خرید شماست</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-2 rounded-md bg-violet-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
    >
      <FaShoppingCart aria-hidden="true" />
      <span>{justAdded ? "اضافه شد" : "افزودن به سبد خرید"}</span>
    </button>
  )
}
