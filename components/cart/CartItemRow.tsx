"use client"

import Link from "next/link"
import { FaTrash } from "react-icons/fa"

import PersianNumber from "@/components/persianNumber"
import { CartItem } from "@/types/cart.types"

export default function CartItemRow({
  item,
  onRemove,
}: {
  item: CartItem
  onRemove: (id: string) => void
}) {
  return (
    <li className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="min-w-0 space-y-2">
        <Link
          href={`/courses/${item.slug}`}
          className="line-clamp-1 text-sm font-semibold text-slate-900 hover:text-violet-700 dark:text-slate-100 dark:hover:text-violet-400"
        >
          {item.title}
        </Link>
        <p className="mt-1 text-sm text-violet-700 dark:text-violet-400">
          <PersianNumber>{item.priceDisplay}</PersianNumber>
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="shrink-0 cursor-pointer rounded-md p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:bg-red-950/40"
        aria-label={`حذف ${item.title} از سبد خرید`}
      >
        <FaTrash aria-hidden="true" />
      </button>
    </li>
  )
}
