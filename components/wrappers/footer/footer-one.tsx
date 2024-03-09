import { Container } from '@/components/ui/container'
import { Grid } from '@/components/ui/grid'
import { Logo } from '@/components/ui/logo'
import Link from 'next/link'
import React from 'react'
import { MessageCircle, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { Row } from '@/components/ui/row'

export const FooterOne = () => {
  return (
    <footer className='bg-bg_primary mt-20 py-24'>
        <Container>
            <Grid classPlus='md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-12'>
                <div className='flex flex-col gap-y-8 md:col-span-1'>
                    <Logo active={true} />
                     
                    <ul className='text-white flex flex-col flex flex-col gap-y-4'>
                      <li>
                        <Link href="#"  className='capitalize'>
                           contact us
                        </Link>
                      </li>
                      <li>
                        <div className='flex gap-x-4 items-center'>
                          <MessageCircle/>
                          <div className='flex flex-col'>
                              <span> Whatzapp</span>
                              <span> +1 202-918-2132</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='flex gap-x-4 items-center'>
                          <PhoneCall/>
                          <div className='flex flex-col'>
                              <span> Call</span>
                              <span> +1 202-918-2132</span>
                          </div>
                        </div>
                      </li>
                      
                    </ul>
                      
                    <h2 className='text-white text-lg'>Dowload App </h2>
                    <div className='flex gap-x-2'>
                      <div>
                        <Image src="/images/android.svg" width="167" height="55" alt="android" />
                      </div>
                    </div>
                </div>

                <div>
                  <p className='w-fit border-b border-b-4 border-text-white pb-4 text-white capitalize font-bold'>most popular categories</p>
                  
                  <ol className='py-8 list-disc text-white ps-4 flex flex-col gap-y-4 capitalize'>
                    
                    <li className='list'>
                      <Link href="/">
                        staples
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        beverages
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        personal care 
                      </Link>
                    </li>

                    <li>
                      <Link href="/">
                        home care 
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        baby care 
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        vegetables & fruits  
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        snacks & foods  
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        diary & bakery  
                      </Link>
                    </li>

                  </ol>

                </div>
                               
                <div>
                  <p className='w-fit border-b border-b-4 border-text-white 
                  pb-4 text-white capitalize font-bold'>customers services </p>
                  
                  <ol className='py-8 list-disc text-white ps-4 capitalize flex flex-col  gap-y-4'>
      
                    <li className='list'>
                      <Link href="/">
                        about us 
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        terms & conditions 
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        faq
                      </Link>
                    </li>

                    <li>
                      <Link href="/">
                        privacy policy 
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                          e-waste policy
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        cancelling & return policy 
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/">
                        snacks & foods  
                      </Link>
                    </li>
                    
                  </ol>

                </div>
            </Grid>
            <hr />
            <Row classPlus='py-12 justify-center'>
                <p className='text-white text-center text-lg'>© 2022 All rights reserved. Reliance Retail Ltd.</p>
            </Row>
        </Container>
    </footer>
  )
}
