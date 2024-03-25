import { Container } from '@/components/ui/container'
import React from 'react'
import { Heading } from '../heading/heading'
import { ProductCard } from './product-card'
import products from '@/mocks/products.json';
import { Grid } from '@/components/ui/grid'

export const ProductList = () => {
  return (
    <section>
        <Container>
            <Heading title="Grab the best deal on" title_bold="Smartphones" href="/products"/>
            <Grid classPlus='xl:grid-cols-5 grid-cols-1
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4   gap-x-4 gap-y-12 py-10 '>
                {products.slice(0,5).map((data,idx)=>{
                  return <ProductCard item={data} key={idx} />
                })}
            </Grid>
        </Container>
    </section>
  )
}
