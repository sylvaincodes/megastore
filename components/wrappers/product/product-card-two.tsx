"use client"
import { SmartNumber } from '@/components/ui/smart-number'
import { getDiscountPrice, getNewPrice } from '@/lib/utils'
import { Product } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import useCart from '@/hooks/use-cart'

export const ProductCardTwo = ({item}: {item: Product}) => {

    const cart = useCart();
    const addItem = () => {
        cart.addItem(item);
    }
    
  return (
    <div className='flex flex-col space-y-4 rounded-sm cursor-pointer transition-all hover:translate-y-[-10px]' onClick={() => addItem()}>

        <div className='relative bg-bg_gray max-h-[200px] max-w-full flex 
            justify-center rounded-sm'>
            <Image className='h-[200px] w-auto object-scale-down' src={item.images[0]} width={200}  height={200} alt='produc-card' />
            
            {
                item.discount !== 0 ?
                <div className='absolute -top-[1px] -right-[1px] rounded-bl-2xl rounded-tr-2xl bg-bg_primary p-1 max-w-[60px] text-sm text-center text-white inline-flex justify-center'>
                { item.discount } %  OFF
                </div>
            :
            ""
            }
        </div>

        <div className=' px-2 py-1 gap-y-2 flex flex-col'>
            <h1 className='text-md font-normal capitalize'>{ item.name.slice(0,20) }</h1>
            <div className='inline-flex gap-x-4 justify-start w-[100px]'>  

            {
                item.discount !== 0 ?
                <span className='text-[12px] font-bold w-full'>
                    <SmartNumber value={getNewPrice(item.price,item.discount)}/>
                </span> 
            
            :
            ""
            }
                <span className={`text-[12px] text-text_gray font-medium  ${ item.discount === 0 ? "" : "line-through" } `}>                    
                    <SmartNumber value={item.price}/>
                </span>  
            </div>
        </div>

    </div>
  )
}
