import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import React from 'react'
import { HeaderTop } from './subs-components/header-top'
import { Navbar } from './subs-components/navbar'
import { CategoryProduct } from '../product/category-product'

export const HeaderOne = () => {
  return (
    <header>
        {/* header top  */}
        <HeaderTop/>

        {/* navbar  */}
        <Navbar/>
        
        <CategoryProduct/>
    </header>
  )
}
