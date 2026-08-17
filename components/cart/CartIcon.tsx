"use client"

import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"

import PersianNumber from "@/components/persianNumber"
import { useCart } from "@/context/CartContext"

export default function CartIcon() {
  const { items } = useCart()

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-200 dark:hover:bg-gray-800"
      aria-label="سبد خرید"
    >
      <FaShoppingCart className="h-5 w-5" aria-hidden="true" />
      {items.length > 0 ? (
        <span className="absolute -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-bold text-white">
          <PersianNumber>{items.length}</PersianNumber>
        </span>
      ) : null}
    </Link>
  )
}
