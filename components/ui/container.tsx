import React, { ReactPropTypes } from 'react'

export const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='container h-full'>
        {children}
    </div>
  )
}
