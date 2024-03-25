import { X } from 'lucide-react'
import React from 'react'

export const BadgeIcon = ({title}: {title: string}) => {
  return (
    <div className='px-4 py-2 inline-flex items-center gap-x-4 bg-bg_gray rounded-full border'>
                        <span className='text-text_gray capitalize'>
                            {title} 
                        </span>
                        <X color='gray'size={14}/>
                    </div>
  )
}
