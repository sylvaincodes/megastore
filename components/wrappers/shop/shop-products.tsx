
import { Grid } from '@/components/ui/grid'
import { Row } from '@/components/ui/row'
import React from 'react'
import { ProductCardTwo } from '@/components/wrappers/product/product-card-two'
import { Product } from '@/types/types'
import Pagination from '@/components/ui/pagination/custom-pagination-two'
import { LayoutTemplate } from 'lucide-react'

export const ShopProducts = ({ products,pageIndex,isFirstPage,isLastPage }:
  { products: Array<Product>; pageIndex: number; isFirstPage: boolean; isLastPage: boolean }) => {

    return (
    <div className='flex flex-col gap-12'>
                    
                    <Grid classPlus='grid grid-cols-2 items-center md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12'>
                      {
                          products.length > 0 ?
                          products.map((data,idx)=>{
                            return <ProductCardTwo key={idx} item={data} />   
                          })
                          :
                          <div className='col-span-4 h-[300px] justify-self-center place-self-center'>
                            <div className='flex flex-col gap-8 justify-center items-center h-full'>
                            <LayoutTemplate size="132"/>
                            <span> Nothing to show </span>
                            </div>
                          </div>
                      }
                    </Grid>

                    <Row classPlus='justify-center items-start mt-10'>
                      <Pagination
                        pageIndex={pageIndex}
                        isFirstPage={isFirstPage}
                        isLastPage={isLastPage}
                      />
                    </Row>

      </div>
  )
}
