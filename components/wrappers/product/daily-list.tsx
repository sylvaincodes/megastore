import { Container } from '@/components/ui/container'
import React from 'react'
import { Heading } from '../heading/heading'
import { DailyCard } from './daily-card'
import dailies from '@/mocks/dailies.json';
import {
  Carousel,
  CarouselContent
} from "@/components/ui/carousel";

export const DailyList = () => {
  return (
    <section>
        <Container>     
          <Heading title="Daily" title_bold="Essentials" href="#"/>
          <Carousel>
            <CarouselContent className="gap-x-1 mt-10">
              {dailies.map((data,idx)=>{
                    return <DailyCard item={data} key={idx} />
              })}
            </CarouselContent>
          </Carousel>
        </Container>
    </section>
  )
}
