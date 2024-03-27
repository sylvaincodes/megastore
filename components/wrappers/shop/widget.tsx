import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Flex } from '@radix-ui/themes'
import { Divider } from '@/components/ui/divider';
import { WidgetTypes } from '@/types/types';

type Object ={
    id: string;
    name: string;
    type: string;
}

export const Widget = ({data,getSortParams, params}: {data: Array<Object>; getSortParams: (s1: string ,s2: string) => void ; params: any}) => {
  
    const handleclick = (item: WidgetTypes ) => {
        let newName = item.name.replaceAll(" ", "").toLowerCase();
        getSortParams(item.type, newName);
    }
    
    return (
            <Flex direction="column" gap="6">
                <p className='text-xl font-medium text-text_gray font-extrabold capitalize'>{data[0].type}</p>
                <ul className='flex flex-col gap-y-6'> 
                    {
                        data.map((item,idx)=>{
                        return   <li key={idx} onClick={() =>handleclick(item)}>   
                            <div className='flex gap-8 text cursor-pointer'>
                                <input type='radio' id={item.name} name={data[0].type} />
                                <label
                                    htmlFor={item.name}
                                    className="capitalize cursor-pointer text-sm text-text_gray font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {item.name}
                                </label>
                            </div>
                        </li>
                     })
                    }
                </ul>
                <Divider/>
            </Flex>
    )
}
