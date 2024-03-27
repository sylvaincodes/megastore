import { LayoutOne } from '@/components/layouts/layout-one'
import React from 'react'
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import  {ShopList}  from '@/components/wrappers/shop/shop-list';

export default function Page({ searchParams,params }:  {
	searchParams: any;  params: { category: string}
}) {

  return (
    <LayoutOne>
      <main className="flex min-h-screen flex-col py-10 bg-white">
          <ShopList searchParams={searchParams} params={params} />
      </main>
    </LayoutOne>
    
  )
}

export const metadata: Metadata = {
  title: 'Product page',
  description: 'Buy more than you think',
  openGraph: mergeOpenGraph({
    title: 'Product page',
    url: '/',
  }),
}
