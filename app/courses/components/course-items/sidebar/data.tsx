

export const sideAdvanced : string[] = [

    'جدیدترین',
    'محبوب ترین',
    'در حال برگزاری',
    'تکمیل ضبط',
    'دارای تخفیف',
    'مخصوص ناشنوایان'

]

type FilterType = "all" | "free" | "paid"

export const buttonfilters: { label: string; value: FilterType }[] = [

  {
   label: "همه",
   value: "all"
  },
  {
    label: "نقدی",
    value: "paid"
  },
  {
    label: "رایگان",
    value: "free"
  }

]
