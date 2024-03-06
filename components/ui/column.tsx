import { cn } from '@/lib/utils';
import React, { ReactPropTypes } from 'react'

export const Column = ({children, classPlus}: {children: React.ReactNode; classPlus?: string;}) => {
  return (
    <div className={cn('flex flex-col',classPlus)}>
        {children}
    </div>
  )
}
