import { Card } from '@/components/ui/card/card'
import { Category } from '@/types/types'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const CategoryItem = ({item}: {item: Category } ) => {
  return (

    // <div className='relative'>
    //     <Link href={`/category/${item.name}`} className='flex gap-x-2 items-center bg-bg_primary_light snap-center cursor-pointer hover:bg-bg_primary group transition-all'>
    //         <span className='text-sm px-4 py-2 rounded-lg capitalize text-bg_primary group-hover:text-white'>
    //             { item.name }
    //         </span>
    //         <ChevronRight className='text-bg_primary group-hover:text-white' size={18} />
    //     </Link>     
    // </div>


    <CarouselItem className="basis-2/12">

          <Link href={`/category/${item.name}`} className='flex justify-between items-center bg-bg_primary_light snap-center cursor-pointer hover:bg-bg_primary group transition-all'>
             <span className='text-sm px-4 py-2 rounded-lg capitalize text-bg_primary group-hover:text-white'>
                { item.name }
             </span>
            <ChevronRight className='text-bg_primary group-hover:text-white ' size={18} />
         </Link> 

    </CarouselItem>

    
  )
}