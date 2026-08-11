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
  created_at?: string
}

export interface SidebarCourse {
  id: string | number
  title: string
  slug: string
  author?: string | null
  pricedisplay?: string | null
}
