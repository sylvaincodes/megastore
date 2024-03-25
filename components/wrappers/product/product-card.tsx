"use client"
import { SmartNumber } from '@/components/ui/smart-number'
import { getDiscountPrice, getNewPrice } from '@/lib/utils'
import { Product } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import useCart from '@/hooks/use-cart'

export const ProductCard = ({item}: {item: Product}) => {

    const cart = useCart();
    const addItem = () => {
        cart.addItem(item);
    }
    
  return (
    <div className='flex flex-col space-y-4 rounded-2xl cursor-pointer 
     border-2 border-border_gray hover:border-bg_primary' onClick={() => addItem()}>

        <div className='relative bg-bg_gray max-h-[200px] max-w-full flex 
            justify-center rounded-2xl'>
            <Image className='h-[200px] w-auto object-scale-down' src={item.images[0]} width={200}  height={200} alt='produc-card' />
            <div className='absolute -top-[1px] -right-[1px] rounded-bl-2xl rounded-tr-2xl bg-bg_primary p-1 max-w-[60px] text-sm text-center text-white inline-flex justify-center'>
                { item.discount } %  OFF
            </div>
        </div>

        <div className=' px-2 py-1 gap-y-2 flex flex-col'>
            <h1 className='text-md font-normal capitalize'>{ item.name.slice(0,20) }</h1>
            <div className='inline-flex gap-x-4 justify-start w-full'>  
                <span className='text-sm font-bold w-full'>
                    <SmartNumber value={getNewPrice(item.price,item.discount)}/>
                </span> 
                <span className='text-sm text-text_gray font-medium line-through w-full'>                    
                    <SmartNumber value={item.price}/>
                </span>  
            </div>
        </div>

        {/* <div className='p-2 grid grid-cols-3 text-green-600'>
            <div className='text-md font-medium flex items-center'>
                 Save 
            </div>

            <div>-</div>
            <div>
                
            <SmartNumber  value={getDiscountPrice(item.price,item.discount)}/>
            </div>
        </div> */}

    </div>
  )
}
