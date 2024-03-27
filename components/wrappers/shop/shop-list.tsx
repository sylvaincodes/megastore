"use client"
import { Container } from '@/components/ui/container'
import React, { useEffect, useState } from 'react'
import { Grid } from '@/components/ui/grid'
import { LeftSidebar } from './left-sidebar'
import products from '@/mocks/products.json';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { getSortedProducts } from '@/lib/products'
import { TopBar } from './top-bar'
import { ShopProducts } from './shop-products'
import { Product } from '@/types/types'

export const ShopList =({
    searchParams, params
}: {
  searchParams: any; params?: any
}) => {
  
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentData, setCurrentData] = useState<Array<Product>>([]);
  
  const getSortParams = (sortType: any, sortValue: any) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType: any, sortValue: any) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  // Pagination
	const POSTS_PER_PAGE = 12;
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;
	const param = {
		pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
		limit: pageIndex * POSTS_PER_PAGE,
	};

  // Filter categories
  const filterProducts = params ?  currentData.filter( item =>  item.category === params.category ) : currentData;
  const filterListProducts = filterProducts.slice(
    param.pageIndex,
    param.limit,
  );

	// Check if the current page is the first or the last
  const isFirstPage = param.pageIndex < 2;
  const isLastPage = filterListProducts.length < POSTS_PER_PAGE;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);

    setCurrentData(sortedProducts);
  }, [ sortType, sortValue, filterSortType, filterSortValue]);
  
  return (
    <section>
        <Container>
  
            <TopBar  productCount={currentData.length}
            productshowing={currentData.length} getFilterSortParams={getFilterSortParams} />
            
            <Grid classPlus='grid-cols-1 lg:grid-cols-[320px_1fr] mt-10 gap-x-8'>

                <div className='lg:hidden'>
                    <Sheet>
                        <SheetTrigger>Open</SheetTrigger>
                        <SheetContent>
                            <LeftSidebar getSortParams={getSortParams} params={params} />
                        </SheetContent>
                    </Sheet>
                </div>

                <div className='hidden lg:flex'>
                    <LeftSidebar getSortParams={getSortParams} params={params}/>
                </div>
                    
                <ShopProducts 
                  products={filterListProducts}
                  pageIndex={pageIndex}
                  isFirstPage={isFirstPage}
                  isLastPage={isLastPage}
                />

            </Grid>

        </Container>
    </section>
  )
}
