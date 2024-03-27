import { Divider } from '@/components/ui/divider'
import React from 'react'
import categories from '@/mocks/categories.json'
import brands from '@/mocks/brands.json'
import prices from '@/mocks/prices.json'
import sizes from '@/mocks/sizes.json'
import colors from '@/mocks/colors.json'
import { Widget } from './widget'

export const LeftSidebar = ({getSortParams, params}:{getSortParams: (s1: string ,s2: string) => void; params?: any  }) => {
  
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

            <Widget  data={categories} getSortParams={getSortParams}   params={params} />
            <Widget  data={sizes} getSortParams={getSortParams}  params={params}/>
            <Widget  data={prices} getSortParams={getSortParams} params={params}/>
            <Widget  data={colors} getSortParams={getSortParams} params={params}/>
            
        </div>

    </div>
  )
}
