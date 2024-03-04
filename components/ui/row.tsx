import { cn } from '@/lib/utils';
import React from 'react'

export const Row = ({children, classPlus}: {children: React.ReactNode; classPlus?: string;}) => {
  return (
    <div className={cn('flex flex-row items-center h-full',classPlus)}>
        {children}
    </div>
  )
}
