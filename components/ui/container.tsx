import { cn } from '@/lib/utils';
import React, { ReactPropTypes } from 'react'

export const Container = ({children, classPlus}: {children: React.ReactNode; classPlus?: string;}) => {
  return (
    <div className={cn('container h-full', classPlus)}>
        {children}
    </div>
  )
}
