"use client"
import React, { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import Image from 'next/image'
import { X, Trash } from 'lucide-react'
import { SearchItem } from '@/components/ui/search'
import { IconsGroup } from '@/components/ui/icons-groups'
import { MobileMenu } from './mobile-menu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'



const cart =[
  {
    product: "caudalie beauty",
    price: 29.99,
    color: "white",
    size: "x"
  }
]


export const Navbar = () => {


  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <section className='relative h-[90px] bg-white border-b border-bg-bg_gray'>
            <Container classPlus="">
                <Row classPlus='gap-x-16'>
                     
                      <div className='flex gap-x-6 items-center'>
                        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                      </div>

                      <div className='flex items-center justify-end gap-x-8 w-full'>
                        <SearchItem openSearch={openSearch} setOpenSearch={setOpenSearch} />
                        <IconsGroup openSearch={openSearch} setOpenSearch={setOpenSearch} openCart={openCart} setOpenCart={setOpenCart} />
                      </div>
             
                </Row>
            </Container>
        </section>
  )
}
