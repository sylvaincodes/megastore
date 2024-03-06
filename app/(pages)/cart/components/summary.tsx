"use client";
import { Card } from '@/components/ui/card/card'
import { Column } from '@/components/ui/column'
import useCart from '@/hooks/use-cart'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import axios from "axios";

export const Summary = () => {

    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
  
    useEffect(() => {
      if (searchParams.get("success")) {
        toast.success("Payment completed.");
        removeAll();
      }
  
      if (searchParams.get("canceled")) {
        toast.error("Something went wrong.");
      }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
      }, 0);
    
    
    const onCheckout = async () => {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
          {
            productIds: items.map((item) => item.id),
            frontendUrl: "https://musikstore.netlify.app",
          },
        );
    
        const data = JSON.stringify(response.data);
    
        let result = data.replace(/^"(.*)"$/, "$1");
    
        window.location.assign(result);
    };
    

  return (
    <Card classPlus='h-fit col-span-1'>
        <Column classPlus='p-2 gap-y-8'>
        <div className="uppercase ">
            total
        </div>
        <hr />
        <div className='flex flex-col gap-y-4'>
            <div className='flex justify-between'>
                <strong className='capitalize'>sub-total</strong>
                <strong className='capitalize'>$ {totalPrice} </strong>
            </div>

            <div className='flex justify-between'>
                <span className='capitalize'>delivery</span>
                <span className='capitalize'></span>
            </div>

            <div>
                <span className='text-sm text-text_gray border-b border-bg_gray py-2'>Standard delivery ( $ 11.00 ) </span>
            </div>

            <div className='w-full'>
                <button className='w-full bg-primary-500 text-white  uppercase px-4 py-2' onClick={onCheckout}>
                    checkout
                </button>
            </div>

            <div className='flex flex-col gap-y-4 mt-10'>
                <p className='uppercase'>we accept : </p>
                <Image src="/images/visa.png" width="1000" height="300" alt="visa" />
                <p className='text-sm text-text_gray'>Got a discount code? Add it in the next step.</p> 
            </div>
        </div>
        </Column>
    </Card>
  )
}

