import { Category } from '@/types/types'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  CarouselItem
} from "@/components/ui/carousel"

export const CategoryItem = ({item}: {item: Category } ) => {
  return (

    <CarouselItem className="basis-2/12">

          <Link href={`/search/${item.name}`} className='rounded-full flex justify-between items-center bg-bg_primary_light snap-center cursor-pointer hover:bg-bg_primary group transition-all'>
             <span className='text-sm px-4 py-2 rounded-lg capitalize text-bg_primary group-hover:text-white'>
                { item.name }
             </span>
            <ChevronDown className='text-bg_primary group-hover:text-white me-4' size={18} />
          </Link> 

    </CarouselItem>

    
  )
}