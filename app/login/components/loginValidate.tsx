"use client"

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter, useSearchParams } from 'next/navigation';

import { supabase } from '@/lib/supabase';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("فرمت ایمیل صحیح نیست").required("وارد کردن ایمیل الزامی است"),
    password: Yup.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد").required("لطفا رمز عبور را وارد کنید")
})

export type LoginValues = {
    email: string,
    password: string
}

const initialValues: LoginValues = {
    email: "",
    password: ""
}

export const useContactLogin = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const formik = useFormik<LoginValues>({
    initialValues,
    validationSchema,

    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setStatus(undefined)

      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })

      if (error) {
        setStatus(
          error.message === "Invalid login credentials"
            ? "ایمیل یا رمز عبور اشتباه است"
            : "خطایی در ورود رخ داد. لطفاً دوباره تلاش کنید"
        )
        setSubmitting(false)
        return
      }

      const redirectTo = searchParams.get("redirect") || "/"
      router.push(redirectTo)
      router.refresh()
    },
  })

  return {
    formik
  }
}
