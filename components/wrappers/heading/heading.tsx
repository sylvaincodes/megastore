import { Row } from '@/components/ui/row'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

export const Heading = ({href,title,title_bold}: {href: string;title: string;title_bold: string;}) => {
  return (
    <Row classPlus='justify-between w-full border-bg_gray border-b-4'>
        <div>
            <p className='border-b border-bg_primary border-b-4 pb-1'>  <span className='text-text_gray font-extrabold mb-1 '>{title}</span>  <span className='text-bg_primary font-bold'>{title_bold}</span> </p>
        </div>
        <div className='inline-flex gap-x-4'>
            <Link href={href} className='text-gray-700'>
                View all
            </Link>
            <ChevronRight className='text-color_icon'/>
        </div>
    </Row>

  )
}
