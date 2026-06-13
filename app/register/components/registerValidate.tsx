import { useFormik } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({

    email: Yup.string().email("فرمت ایمیل صحیح نیست").required("وارد کردن ایمیل الزامی است"),
    password: Yup.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد").required("لطفا رمز عبور را وارد کنید"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')] , "مقدار وارد شده با رمز عبور مطابقت ندارد").required("لطفا مجدداً رمز عبور را وارد کنید")

})


export type RegisterValues = {

    email: string,
    password: string,
    confirmPassword: string
}

const initialValues : RegisterValues = {

    email: "",
    password: "",
    confirmPassword: ""
  }


export const useContactRegister = () => {

  const formik = useFormik<RegisterValues>({

    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit:() => {

      try {
        formik.resetForm()
        console.log("success")
      }

      catch (error) {
        console.error("Submission error:", error)
      }

    },
  })

  return {
    formik
  }

}
