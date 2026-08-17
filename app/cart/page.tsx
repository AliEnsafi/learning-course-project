"use client"

import { Footer, Navbar } from "@/components/homePageImport"
import CartItemRow from "@/components/cart/CartItemRow"
import CartSummary from "@/components/cart/CartSummary"
import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { items, removeItem, totalPrice, isReady } = useCart()

  if (!isReady) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-24" />
        <Footer />
      </>
    )
  }

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="mx-auto min-h-96 px-4 py-24 text-center flex items-center">
          <p className="text-slate-600 dark:text-slate-300">سبد خرید شما خالی است.</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto grid w-md lg:w-4xl gap-10 px-4 py-24 lg:grid-cols-5">
        <ul className="space-y-3 lg:col-span-3">
          {items.map((item) => (
            <CartItemRow key={item.id} item={item} onRemove={removeItem} />
          ))}
        </ul>

        <div className="lg:col-span-2">
          <CartSummary totalPrice={totalPrice} itemCount={items.length} />
        </div>
      </div>
      <Footer />
    </>
  )
}
