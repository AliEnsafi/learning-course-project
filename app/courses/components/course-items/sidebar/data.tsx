

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

]

type FilterType = "all" | "free" | "paid"

export const buttonfilters: { id: number; label: string; value: FilterType }[] = [

  {
    id: 1,
   label: "همه",
   value: "all"
  },
  {
    id: 2,
    label: "نقدی",
    value: "paid"
  },
  {
    id: 3,
    label: "رایگان",
    value: "free"
  }

]
