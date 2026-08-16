"use client"

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/supabase';

const validationSchema = Yup.object().shape({

    email: Yup.string().email("فرمت ایمیل صحیح نیست").required("وارد کردن ایمیل الزامی است"),
    password: Yup.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد").required("لطفا رمز عبور را وارد کنید")
                  .matches(/[A-Za-z]/, "رمز عبور باید شامل حداقل یک حرف باشد")
                  .matches(/\d/, "رمز عبور باید شامل حداقل یک عدد باشد")
                  .matches(/[@$!%*?&#^()_\-+=<>]/, "رمز عبور باید شامل حداقل یک علامت باشد"),

    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "مقدار وارد شده با رمز عبور مطابقت ندارد")
                        .required("لطفا مجدداً رمز عبور را وارد کنید")

})

export type RegisterValues = {
    email: string,
    password: string,
    confirmPassword: string
}

const initialValues: RegisterValues = {
    email: "",
    password: "",
    confirmPassword: ""
}

export const useContactRegister = () => {
  const router = useRouter()

  const formik = useFormik<RegisterValues>({
    initialValues,
    validationSchema,

    onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
      setStatus(undefined)

      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      })

      if (error) {
        setStatus({ type: "error", message: error.message })
        setSubmitting(false)
        return
      }

      resetForm()
      setStatus({
        type: "success",
        message: "ثبت‌نام با موفقیت انجام شد. لطفاً ایمیل خود را برای تأیید حساب بررسی کنید.",
      })
      setSubmitting(false)
    },
  })

  return {
    formik
  }
}
