import { cn } from '@/lib/utils';
import React from 'react'

export const Grid = ({children, classPlus}: {children: React.ReactNode; classPlus?: string;}) => {
  return (
    <div className={cn('grid  h-full',classPlus)}>
        {children}
    </div>
  )
}
