import PersianNumber from "@/components/persianNumber"

export default function CartSummary({
  totalPrice,
  itemCount,
}: {
  totalPrice: number
  itemCount: number
}) {
  return (
    <div className="rounded-md border space-y-2 border-slate-200 bg-gray-100 p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
        <span>تعداد دوره‌ها</span>
        <PersianNumber>{itemCount}</PersianNumber>
      </div>

      <div className="mt-3 flex items-center justify-between border-t space-x-3 border-slate-200 pt-3 text-base font-bold text-slate-900 dark:border-gray-700 dark:text-slate-100">
        <span>مبلغ قابل پرداخت</span>
        <span className="text-violet-700 dark:text-violet-400">
          <PersianNumber>{totalPrice.toLocaleString("fa-IR")}</PersianNumber> تومان
        </span>
      </div>

      <button
        type="button"
        disabled={itemCount === 0}
        className="mt-4 w-full rounded-md bg-violet-700 px-4 py-2.5 cursor-pointer text-sm font-medium text-white transition-colors hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ادامه فرایند پرداخت
      </button>
    </div>
  )
}
