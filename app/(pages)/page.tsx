import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { LayoutOne } from "@/components/layouts/layout-one";
import { HeroOne } from "@/components/wrappers/hero/hero-one";

export default function Home() {
  return (

    <LayoutOne>
      <HeroOne/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          hello
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
