import Link from 'next/link'
import React from 'react'

export const Logo = ({active}: {active: boolean}) => {
  return (
    <Link href="/" className={`${active ? "text-white" : "hidden"} sm:flex flex text-primary-600 
                        font-extrabold text-2xl`}>
                          MegaStore
                        </Link>
  )
}
