import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import { FormValues , initialValues } from './inputData'


  const validationSchema = Yup.object().shape({

  firstName: Yup.string().min(3, "نام شما خیلی کوتاه است!").required("وارد کردن نام الزامی است"),
  lastName: Yup.string().min(3, "نام خانوادگی شما خیلی کوتاه است!").required("وارد کردن نام خانوادگی الزامی است"),
  email: Yup.string().email("فرمت ایمیل صحیح نیست").required("وارد کردن ایمیل الزامی است"),
  subject: Yup.string().required("موضوع الزامی است"),
  message: Yup.string().min(10 , "پیام شما کوتاه تر از حد مجاز است").required("پیام الزامی است")

})


export const useContactForm = () => {

  const formik = useFormik<FormValues>({

    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit:() => {

      try {
        toast.success('پیام شما با موفقیت ارسال شد!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        formik.resetForm()
      }

      catch (error) {
        toast.error('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        console.error("Submission error:", error)
      }

    },
  })

  return {
    formik
  }

}
