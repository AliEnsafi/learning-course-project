export interface CartCourse {
  id: string
  slug: string
  title: string
  price: number
  priceDisplay: string
}

export type CartItem = CartCourse
