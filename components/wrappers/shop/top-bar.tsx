import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import React  from 'react'
import { Row } from "@/components/ui/row"
import { Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import filters from '@/mocks/filters.json'

export const TopBar = ({productCount,productshowing,getFilterSortParams} : {productCount: number; 
    productshowing: number; getFilterSortParams: (a: string, b: string) => void}) => {
  
    const handlechange = (e: string) => {
        getFilterSortParams("filterSort",e);
    }
    
    return (
    <Row classPlus='justify-between'>

    <div className='hidden lg:flex items-center' >
        <div className='w-[320px]'>
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
               
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Products</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div >
            <h1 className='capitalize font-bold text-2xl '>search result</h1>
        </div>
    </div>

    <div className='lg:hidden'>
        <Button variant="outline" className='flex gap-x-4'>
            <Filter width="16" height="16" /> Filters
        </Button>
    </div>

    <div className='flex gap-x-8 items-center ms-auto'>
        <div className=' hidden lg:flex text-text_gray'>
            {productCount} items
        </div>
        
        <Select onValueChange={e => handlechange(e)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Sorting opions</SelectLabel>
                {
                    filters.map((item, idx) => {
                        return  <SelectItem key={idx} value={item.name.replaceAll(" ", "").toLowerCase()}>{item.name}</SelectItem>
                    })
                } 
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</Row>
  )
}
