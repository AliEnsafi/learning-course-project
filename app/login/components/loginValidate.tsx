import { useFormik } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({

    email: Yup.string().email("فرمت ایمیل صحیح نیست").required("وارد کردن ایمیل الزامی است"),
    password: Yup.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد").required("لطفا رمز عبور را وارد کنید")

})


export type LoginValues = {

    email: string,
    password: string
}

const initialValues : LoginValues = {

    email: "",
    password: ""
  }


export const useContactLogin = () => {

  const formik = useFormik<LoginValues>({

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
