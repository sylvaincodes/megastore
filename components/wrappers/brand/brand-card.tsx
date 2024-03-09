import { CarouselItem } from '@/components/ui/carousel'
import { Brand } from '@/types/types'
import Image from 'next/image'
import React from 'react'

export const BrandCard = ({item}: {item:Brand}) => {
  return (
    <CarouselItem className="basis-12/12 sm:basis-6/12 md:basis-6/12 lg:basis-4/12 
    xl:basis-4/12 2xl:basis-4/12">
        <div className='flex flex-col items-center space-y-4 cursor-pointer overflow-hidden'
        style={{ backgroundColor: `${item.color}`  , height:"100%", width:"100%"}}
            >
            <div className='relative grid grid-cols-3 px-4  py-2 w-full h-full overflow-hidden transition-all hover:scale-105'>
                <div className='flex flex-col gap-y-4 col-span-2 justify-between px-1'>
                    <div className='flex p-2 w-fit rounded-lg text-white uppercase' 
                        style={{ backgroundColor: `${item.name_bg}`}}>
                        {item.name}
                    </div>
                    <div className='w-fit'>
                        <Image src={item.icon[0]} width="62" height="62" alt="icon" />
                    </div>
                    <div>
                        <h1 className='uppercase text-xl font-bold '>{item.text}</h1>                       
                    </div>
                </div>

                <div className='relative grid grid-cols-1'>
                    <Image className='absolute top-5 right-0 z-20' 
                    src={item.product[0]} width="300" height="400" alt="icon" />
                </div>
                
                <Image className='absolute -top-5 right-0 z-10 h-[200px] w-[200px]' 
                    src={item.images[0]} width="400" height="400" alt="icon" />
                </div>

            </div>
    </CarouselItem>
  )
}