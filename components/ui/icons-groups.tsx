import { SearchIcon, ShoppingCart, User } from 'lucide-react'
import React, { Fragment } from 'react'

export const IconsGroup = ({openSearch,setOpenSearch}: {openSearch: boolean; setOpenSearch: any}) => {
  return (
    <Fragment>
        <div className='md:hidden flex items-center gap-x-2 border-r 
                        border-border_gray pe-6 max-w-[200px]'>

                          <button onClick={  () => setOpenSearch(!openSearch)}>
                          <SearchIcon size={24} className='text-color_icon' />
                          </button>
                          
                        </div>
                        
                        <div className='flex items-center  gap-x-2 border-r 
                        border-border_gray pe-6 max-w-[200px]'>
                          <User size={24} className='text-color_icon' />
                          <p className='hidden lg:flex text-text_gray'>Sign Up/ Sign In</p>
                        </div>
                         
                        <div className='inline-flex items-center gap-x-2 w-fit'>
                          <ShoppingCart size={24} className='text-color_icon' />
                          <span className='hidden lg:flex text-text_gray'>Cart</span>
                        </div>
    </Fragment>
  )
}
