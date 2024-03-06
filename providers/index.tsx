import React, { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import { ClerkProvider } from '@clerk/nextjs'


export const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <Fragment>
        <ClerkProvider>
        <Toaster/>
            {children}
        </ClerkProvider>
    </Fragment>
  )
}
