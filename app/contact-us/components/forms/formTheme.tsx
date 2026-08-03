"use client"

import React from "react"
import { useContactForm } from "./formValidate"
import { FormValues } from "./inputData"

import { InputData } from "./inputData"


const getInputClass = (fieldName: keyof FormValues, formik: any): string => {

  const baseClasses = "mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm outline-none focus:border-indigo-300 dark:focus:border-indigo-500 p-2 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:ring-opacity-50"
  const errorClasses = "border-red-500"

  if (formik.touched[fieldName] && formik.errors[fieldName]) {
    return `${baseClasses} ${errorClasses}`
  }
  return baseClasses

}

const FormTheme : React.FC = () => {

  const { formik } = useContactForm()

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 space-y-10">
      <h2 className="text-lg font-bold mb-4 text-violet-600 dark:text-violet-400">فرم تماس</h2>

      {
        InputData.map((item) => {

          const { name , label , type , required } = item
          const inputClasses = getInputClass(name, formik)

          return(
            <div className="space-y-2 mb-4">

                <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                {
                  type === "textarea"
                  ? (
                    <textarea
                      name={name}
                      className={inputClasses}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={(formik.values as any)[name]}
                      rows={4}
                    />
                  ) : (
                    <input
                      type={type}
                      name={name}
                      className={inputClasses}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={(formik.values as any)[name]}
                    />
                  )
                }

            { formik.touched [name] && formik.errors[name] && (
              <div className="text-red-500 text-xs italic mt-1">
                {formik.errors[name] as string}
              </div>
            )}
            </div>
          )
        })
      }

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer disabled:bg-gray-400"
      >
        {formik.isSubmitting ? "در حال ارسال..." : "ارسال"}
      </button>
    </form>
  )
}

export default FormTheme
