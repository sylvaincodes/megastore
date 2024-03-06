import { Card } from '@/components/ui/card/card'
import { Product } from '@/types/types'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import useCart from '@/hooks/use-cart'



export const CartItem = ({item}: {item:Product}) => {

  const cart = useCart();

  const onRemove = (item: Product) => {
    cart.removeItem(item.id);
  };


  return (
    <Card>
                      <div  className='grid grid-cols-3 gap-x-8 bg-white py-4'>
                                    <div className='bg-bg_gray p-4 h-[200px] w-[200px] inline-flex justify-center'>
                                      <img className='' src={item.images[0]} 
                                      width="auto" height="auto" alt="product" />
                                    </div>
                                    <div className='flex flex-col gap-y-4 py-2'>
                                        <div className='font-extrabold'>
                                          ${item.price}
                                        </div>
                                        <div className='flex flex-col gap-y-2 text-sm text-text_gray'>
                                          <p className="text-xl tracking-light">{item.name}</p>
                                          <p className='inline-flex gap-x-8'> 
                                          <span>{item.color}</span>
                                            <span>{item.size}</span>
                                          </p>
                                          <p>Qty: 1</p>
                                          
                                        </div>
                                    </div>

                                    <div className='ms-auto'>
                                        <button className='ms-auto w-full hover:primary-900' 
                                        onClick={()=>onRemove(item) }>
                                            <Trash size={18} color='gray' className="ms-auto " />
                                        </button>
                                    </div>
                                    
                                </div> 
                      </Card>
  )
}
