import { SearchIcon, ShoppingCart, Trash, User, X } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types/types';

export const IconsGroup = ({openSearch,setOpenSearch,openCart,setOpenCart}: {openSearch: boolean; setOpenSearch: any;openCart: boolean; setOpenCart: any}) => {

  const cart = useCart();
  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
  
  const deleteItem = (item: Product) => {
    cart.removeItem(item.id);
  };

  return (

    <Fragment >
                        <div className='md:hidden flex items-center gap-x-2 border-r 
                        border-border_gray pe-6 max-w-[200px]'>

                          <button onClick={  () => setOpenSearch(!openSearch)}>
                          <SearchIcon size={24} className='text-color_icon' />
                          </button>
                          
                        </div>
                        
                        <div className='border-r 
                        border-border_gray pe-6 max-w-[200px]'>
                          <Link className='flex items-center  gap-x-2 ' href="/sign-in">
                          <User size={24} className='text-color_icon' />
                          <p className='hidden lg:flex text-text_gray'>Sign Up/ Sign In</p>
                          </Link>
                        </div>
                         
                        <div className='md:hidden w-fit'>
                          <Link className='inline-flex items-center gap-x-2 ' href="/cart">  
                            <ShoppingCart size={24} className='text-color_icon' />
                            <span className='hidden lg:flex text-text_gray'>Cart</span>
                            <span className='hidden md:block'>( { cart.items.length } )</span>
                          </Link> 
                        </div>
                        
                        <div className='hidden md:flex w-fit'>
                          <Link className='inline-flex items-center gap-x-2 ' href="#" role='button'  
                          onClick={()=> setOpenCart(!openCart) }>  
                            <ShoppingCart size={24} className='text-color_icon' />
                            <span className='hidden lg:flex text-text_gray'>Cart</span>
                            <span>( { cart.items.length } )</span>
                          </Link> 
                        </div>

                      {/* cart menu  */}
                      <div className={`grid grid-rows-[50px_1fr_50px_200px] border z-20 
                              border-border_gray shadow-lg fixed top-0 right-0  min-h-screen
                              min-w-[320px] md:w-[400px] h-fit transition-all ease-in duration-800 
                              ${ openCart ? "visible translate-x-0": "z-0 invisible translate-x-full"}`}>   
                              
                              <div className='bg-bg_gray px-4 py-2 '>
                                  <div className='flex gap-x-8 w-full'>
                                    
                                    <div className='flex items-center justify-between gap-x-4'>
                                      <strong>My bag,</strong>
                                      <span className='text-text_gray'>{cart.items.length} items</span>
                                    </div>

                                    <div className='ms-auto'>
                                      <button className='text-text_gray' title='close' onClick={()=> setOpenCart(!openCart) }>
                                        <X/>
                                      </button>
                                    </div>
                                      
                                  </div>
                              </div>

                              <div className='p-4 flex flex-col space-y-8 max-h-[600px] overflow-auto bg-white'>
                                
                                {

                                  cart.items.length > 0 ?
                                  cart.items.map((item, idx) =>{
                                    return <div key={idx} className='flex gap-x-4 bg-white py-4 border-b border-gray-300'>
                                    <div>
                                      <Image src={item.images[0]} 
                                      width="100" height="140" alt="product" />
                                    </div>
                                    <div className='flex flex-col gap-y-4 py-4'>
                                        <div className='font-extrabold'>
                                          ${item.price}
                                        </div>
                                        <div className='text-sm text-text_gray flex flex-col gap-y-1'>
                                          <p className="capitalize">{item.name}</p>
                                          <p className='inline-flex gap-x-8'> 
                                          <span>{item.color}</span>
                                            <span>{item.size}</span>
                                          </p>
                                          <div className='flex justify-between'> 
                                            <div className=''>
                                            Qty: 1 
                                            </div> 
                                            <div>
                                              <button onClick={ () => deleteItem(item)} className='ms-auto w-full'>
                                                <Trash size={18} className="ms-auto text-gray-700 hover:text-red-800" />
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div> 
                                  })

                                  :
                                  <p className='text-center'> Click on any product to add here. </p>
                                  
                                }
                                
                                
                              </div>
                              
                              <div className='bg-gray-50  p-4 border border-gray-150'>
                                    <div className='flex justify-between'>
                                        <div>
                                          sub total
                                        </div>
                                        <div className='text-color_gray'>
                                          ${totalPrice}
                                        </div>
                                    </div>
                              </div>

                              <div className='bg-bg_gray gap-x-4'>
                                
                                <div className='p-4 flex justify-between border border-bg-gray-200' >
                                  <Link href="/cart"  className='px-6 py-4 uppercase hover:bg-white hover:text-black transition-all bg-primary-300 text-black  '>
                                      view bag
                                  </Link>
                                  <button className='px-6 py-4 uppercase hover:bg-gray-800 hover:text-white transition-all bg-neutral-50 text-black  '>
                                      checkout
                                  </button>
                                </div>

                                <div className='text-text_gray p-4 flex flex-col items-center gap-y-2'>
                                  <p> Free Delivery Worldwide*</p>
                                  <div>
                                    More info here <Link href="#">
                                    here
                                    </Link> 
                                  </div>
                                </div>

                              </div>
                      </div>

    </Fragment>
  )
}
