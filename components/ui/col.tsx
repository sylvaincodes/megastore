import { cn } from '@/lib/utils';
import React from 'react'

export const Col = ({children, classPlus}: {children: React.ReactNode; classPlus?: string;}) => {
  return (
    <div className={cn('flex flex-col h-full',classPlus)}>
        {children}
    </div>
  )
}
