"use client"

import React from "react"
import Image from "next/image"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import { CarouselData } from "./carouselData"



const MainCarousel : React.FC = () => {

  const [emblaRef] = useEmblaCarousel({ loop: true , direction: 'rtl' } , [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ] )


  return (
      <div className="overflow-hidden rounded-2xl w-10/12 mx-auto mt-20 hidden lg:block" ref={emblaRef}>
        <div className="flex" dir="rtl">

          {
            CarouselData.map((item) => {

              const { id , image , alt } = item

              return(

              <div key={id} className="relative flex-[0_0_100%] h-60 flex items-center justify-center text-2xl shrink-0">
                <Image src={image} alt={alt} fill className="object-cover" />
              </div>

              )
            })
          }

        </div>
      </div>
  )
}

export default MainCarousel
