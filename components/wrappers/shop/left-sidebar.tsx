import { Divider } from '@/components/ui/divider'
import React from 'react'
import categories from '@/mocks/categories.json'
import brands from '@/mocks/brands.json'
import prices from '@/mocks/prices.json'
import sizes from '@/mocks/sizes.json'
import colors from '@/mocks/colors.json'
import { Widget } from './widget'

export const LeftSidebar = ({getSortParams}:{getSortParams: (s1: string ,s2: string) => void  }) => {
  
  const handleclick = (item: string) => {
      getSortParams(item,item)
  }
  
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-y-8'>

            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>Filters</h1>
                <button className='text-text_gray' onClick={() => handleclick("all")}>
                    Clear All
                </button>
            </div>

            <Divider/>

            <Widget  data={categories} getSortParams={getSortParams} />
            <Widget  data={brands} getSortParams={getSortParams}/>
            <Widget  data={sizes} getSortParams={getSortParams}/>
            <Widget  data={prices} getSortParams={getSortParams}/>
            <Widget  data={colors} getSortParams={getSortParams}/>
            
        </div>

    </div>
  )
}
