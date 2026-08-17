"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { Footer, Navbar } from "@/components/homePageImport"
import { useAuthUser } from "@/hooks/useAuthUser"
import { supabase } from "@/lib/supabase"

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading } = useAuthUser()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [isLoading, user, router])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  if (isLoading || !user) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-24" />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto w-md lg:w-3xl px-4 py-24 space-y-8">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          ناحیه کاربری
        </h1>

        <section className="rounded-md border border-slate-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
            مشخصات حساب
          </h2>
          <p className="text-sm text-slate-900 dark:text-slate-100">{user.email}</p>
        </section>

        <section className="rounded-md border border-slate-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
            دوره‌های خریداری شده
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            هنوز دوره‌ای خریداری نکرده‌اید.
          </p>
        </section>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-md bg-slate-50 dark:bg-gray-900 border border-red-300 px-4 py-2.5 text-sm cursor-pointer font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/40"
        >
          خروج از حساب کاربری
        </button>
      </div>
      <Footer />
    </>
  )
}
