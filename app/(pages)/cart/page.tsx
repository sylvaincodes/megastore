"use client"
import { LayoutOne } from '@/components/layouts/layout-one'
import { Card } from '@/components/ui/card/card';
import { Container } from '@/components/ui/container';
import React from 'react'
import { CartItem } from './components/cart-item';
import { Summary } from './components/summary';
import useCart from '@/hooks/use-cart';
// import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
// import { Metadata } from "next";

export default function Page() {
  const cart = useCart();
  
  return (
    <LayoutOne>
      
      <main className="flex min-h-screen flex-col items-center py-10 bg-gray-100">
      <Container>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8'>
          
              <div className='flex flex-col gap-y-4 col-span-2'>             
                      <Card classPlus="">
                            <h1 className='text-xl font-bold uppercase'>my bag</h1>
                            <span className='text-sm text-text_gray font-normal'>
                              items are reserved for 60 minutes. </span>
                      </Card>
                      {
                        cart.items.map((data, idx)=> {
                          return <CartItem item={data} key={idx} />
                        })
                      }
              </div>
              
              <Summary />

          </div>
      </Container>
  
      </main>
           {/* <div className='flex flex-col gap-y-12 items-center'>
           <ShoppingBag size={48} className='text-black' />
           <h1 className='text-xl font-lighter tracking-light '>Your bag is empty</h1>
          </div> */}

    </LayoutOne>
  )
}

// export const metadata: Metadata = {
//   title: 'Cart page',
//   description: 'Buy more than you think',
//   openGraph: mergeOpenGraph({
//     title: 'Cart page',
//     url: '/',
//   }),
// }
