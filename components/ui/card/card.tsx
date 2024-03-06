import { cn } from '@/lib/utils';
import React from 'react'

export const Card = ({children, classPlus}: {children: React.ReactNode; classPlus?: string}) => {
  return (
    <div className={cn('flex w-full justify-between bg-white p-4',classPlus)}>
         {children}
    </div>
  )
}
