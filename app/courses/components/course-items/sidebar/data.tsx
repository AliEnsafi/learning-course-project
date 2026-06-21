

<<<<<<< HEAD
export const sideAdvanced : {id : number , title: string}[] = [

  {
    id: 1,
    title: 'جدیدترین'
  },
  {
    id: 2,
    title: 'محبوب ترین'
  },
  {
    id: 3,
    title: 'در حال برگزاری'
  },
  {
    id: 4,
    title: 'تکمیل ضبط'
  },
  {
    id: 5,
    title: 'دارای تخفیف'
  },
  {
    id: 6,
    title: 'مخصوص ناشنوایان'
  }
=======
export const sideAdvanced : string[] = [

    'جدیدترین',
    'محبوب ترین',
    'در حال برگزاری',
    'تکمیل ضبط',
    'دارای تخفیف',
    'مخصوص ناشنوایان'
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c

]

type FilterType = "all" | "free" | "paid"

<<<<<<< HEAD
export const buttonfilters: { id: number; label: string; value: FilterType }[] = [

  {
    id: 1,
=======
export const buttonfilters: { label: string; value: FilterType }[] = [

  {
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
   label: "همه",
   value: "all"
  },
  {
<<<<<<< HEAD
    id: 2,
=======
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
    label: "نقدی",
    value: "paid"
  },
  {
<<<<<<< HEAD
    id: 3,
=======
>>>>>>> e26db95ebb988e32ae61777779c340facb95326c
    label: "رایگان",
    value: "free"
  }

]
