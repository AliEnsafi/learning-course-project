import { StaticImageData } from "next/image"

export interface Article {

  id: string
  title: string
  slug: string
  description: string | null
  imageUrl: string
  views: number
  comments: number
  writer: string
}

export interface ArticleDataProps {

    id: number,
    image: string | StaticImageData,
    slug: string,
    title: string,
    description: string,
    writer: string,
    views: number,
    comments: number

}
