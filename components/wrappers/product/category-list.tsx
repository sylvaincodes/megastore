import { Container } from '@/components/ui/container'
import React from 'react'
import { Heading } from '../heading/heading'
import { CategoryCard } from './category-card'
import categories from '@/mocks/categoriesList.json';
import {
  Carousel,
  CarouselContent
} from "@/components/ui/carousel";

export const CategoryList = () => {
  return (
    <section>
        <Container>     
          <Heading title="Shop from" title_bold="Top Categories" href="#"/>
          <Carousel>
            <CarouselContent className="gap-x-1 mt-10">
              {categories.map((data,idx)=>{
                    return <CategoryCard item={data} key={idx} />
              })}
            </CarouselContent>
          </Carousel>
        </Container>
    </section>
  )
}
