import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { LayoutOne } from "@/components/layouts/layout-one";
import { HeroOne } from "@/components/wrappers/hero/hero-one";
import { ProductList } from "@/components/wrappers/product/product-list";
import { CategoryList } from "@/components/wrappers/product/category-list";
import { BrandList } from "@/components/wrappers/brand/brand-list";
import { DailyList } from "@/components/wrappers/product/daily-list";

export default function Home() {
  return (
    <LayoutOne>
      <HeroOne/>
      <main className="flex min-h-screen flex-col space-y-24 mt-24">
        <ProductList />
        <CategoryList />
        <BrandList />
        <DailyList />
      </main>
    </LayoutOne>
  );
}


export const metadata: Metadata = {
  title: 'Home page',
  description: 'Buy more than you think',
  openGraph: mergeOpenGraph({
    title: 'Home page',
    url: '/',
  }),
}
