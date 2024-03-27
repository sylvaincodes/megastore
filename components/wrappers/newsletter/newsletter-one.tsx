import { Container } from '@/components/ui/container'
import { Col } from '@/components/ui/col'
import { Button } from '@radix-ui/themes'
import React from 'react'

export const NewletterOne = () => {

    const handleclick = () => {
            //Todo
    }
    
  return (
    <section className='py-20'>
        <Container>
            <Col classPlus="gap-8 items-center" >
                <h1 className="text-gray font-bold text-5xl tracking-wide">Subscribe</h1>
                <p className='text-center text-gray-500 font-normal text-base tracking-wide'>Subscribe to our newsletter to receive news on update</p>
                <input className='border-b-2 border-bg_gray p-4 focus:outline-none text-center w-full lg:max-w-2xl' type="text" name="newsletter" id="newsletter" placeholder="Your Email Address" />
                <Button variant="solid" className='bg-black px-12 py-6 hover:bg-primary-800'>
                    SUBSCRIBE    
                </Button> 
            </Col>
        </Container>
    </section>
  )
}
