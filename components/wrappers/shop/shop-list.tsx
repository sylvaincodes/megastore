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


export const ShopList =({
    searchParams,
}: {
  searchParams: any;
}) => {
  
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const getSortParams = (sortType: any, sortValue: any) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType: any, sortValue: any) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  // Set the number of posts to be displayed per page
	const POSTS_PER_PAGE = 12;

  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

	// Define the parameters for fetching posts based on the current page
	const params = {
		pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
		limit: pageIndex * POSTS_PER_PAGE,
	};

  const filterListProducts = currentData.slice(
    params.pageIndex,
    params.limit,
  );

		// Check if the current page is the first or the last
    const isFirstPage = params.pageIndex < 2;
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
                            <LeftSidebar  getSortParams={getSortParams}/>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className='hidden lg:flex'>
                    <LeftSidebar getSortParams={getSortParams}/>
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
