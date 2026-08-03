import { StaticImageData } from 'next/image'

export interface dataItemsProps {

    id: number,
    image: StaticImageData,
    title: string,
    description: string,
    level: string,
    price: string,
    slug: string
}

export interface CourseItemsProps {

  id: string | number
  imageUrl?: string
  title: string
  author?: string
  time?: string
  pricedisplay?: string
  slug: string
  priceRaw?: number
}
