import React from 'react'
import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import { MapPin, PercentCircle, Truck } from 'lucide-react';

export const HeaderTop = () => {
  return (
    <section className='h-[42px] bg-bg_gray'>
            <Container>
                <Row>
                    <div className='w-full sm:w-fit'>
                        <p className="text-text_gray text-center text-sm">
                            welcome to worldwide megastore
                        </p>
                    </div>

                    <div className='hidden md:flex flex gap-x-8 items-center ms-auto'>

                        <div className='inline-flex gap-x-2 items-center border-r border-border_gray pe-6'>
                            <MapPin size={18} className='text-primary-800'/>
                            <span className=' text-sm'>Deliver to</span>
                            <strong className='text-sm text-text_gray'>423651</strong>
                        </div>
                        <div className='inline-flex gap-x-2 items-center border-r border-border_gray pe-6'>
                            <Truck size={18} className='text-primary-800'/>
                            <span className='text-text_gray'>Track your order</span>
                        </div>
                        <div className='inline-flex gap-x-2 items-center'>
                            <PercentCircle size={18} className='text-primary-800'/>
                            <span className='text-sm text-text_gray'> All offers</span>
                        </div>

                    </div>
                </Row>
            </Container>
    </section>
  )
}
