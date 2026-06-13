
export interface FormValues {

  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string
}

interface InputField  {
  name: keyof FormValues,
  label: string,
  required?: boolean,
  type: string
}

export const initialValues : FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  }


export const InputData : InputField[] = [

  {
    name: 'firstName',
    label: 'نام',
    type: 'text',
    required: true
  },
  {
    name: 'lastName',
    label: 'نام خانوادگی',
    type: 'text',
    required: true
  },
  {
    name: 'email',
    label: 'ایمیل',
    type: 'email',
    required: true
  },
  {

    name: 'subject',
    label: 'عنوان',
    type: 'text',
    required: true
  },
  {

    name: 'message',
    label: 'توضیحات',
    type: 'textarea',
    required: true
  }
]
