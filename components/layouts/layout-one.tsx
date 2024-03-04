import React, { Fragment } from 'react'
import { HeaderOne } from '../wrappers/header/header-one'
import { FooterOne } from '../wrappers/footer/footer-one'

export const LayoutOne =  ({children}: {children: React.ReactNode}) => {
  return (
    <Fragment>
        <HeaderOne/>
        {children}
        <FooterOne/>
    </Fragment>

  )
}
