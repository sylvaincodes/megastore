import Link from 'next/link'
import React from 'react'

export const Logo = ({classPlus}: {classPlus: string}) => {
  return (
    <Link href="/" className={`${classPlus} sm:flex flex text-primary-600 
                        font-extrabold text-2xl`}>
                          MegaStore
                        </Link>
  )
}
