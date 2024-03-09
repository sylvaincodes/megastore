import { Container } from '@/components/ui/container'
import React from 'react'
import { Heading } from '../heading/heading'
import { BrandCard } from './brand-card'
import brands from '@/mocks/brands.json';
import {
  Carousel,
  CarouselContent
} from "@/components/ui/carousel";

export const BrandList = () => {
  return (
    <section>
        <Container>     
          <Heading title="Top" title_bold="Electronics Brands" href="#"/>
          <Carousel>
            <CarouselContent className="gap-x-1 mt-10">
              {brands.map((data,idx)=>{
                return <BrandCard item={data} key={idx} />
              })}
            </CarouselContent>
          </Carousel>
        </Container>
    </section>
  )
}
