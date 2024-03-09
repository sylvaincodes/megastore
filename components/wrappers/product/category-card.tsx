"use client"
import { Category } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import {
  CarouselItem
} from "@/components/ui/carousel";
import Link from 'next/link';

export const CategoryCard = ({item}: {item: Category}) => {
  return (

    <CarouselItem className="basis-12/12 sm:basis-6/12 md:basis-4/12 lg:basis-3/12 xl:basis-3/12 2xl:basis-2/12">
    <div className='flex flex-col items-center space-y-4 cursor-pointer'>

        <Link href={`categories/${item.name}`}>  
          <div className='bg-bg_gray flex
              justify-center rounded-full h-[150px]
              w-[150px] border border-border_gray hover:border-bg_primary'>
              <Image className='h-[150px] w-auto object-scale-down' 
              src={item.images[0]} width={200}  height={200} alt='produc-card' />
          </div>
        </Link>

        <div className='capitalize text-sm lg:text-lg'>
            {item.name }
        </div>

    </div>
    </CarouselItem>
  )
}
