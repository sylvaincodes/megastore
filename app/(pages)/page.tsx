import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { LayoutOne } from "@/components/layouts/layout-one";

export default function Home() {
  return (

    <LayoutOne>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          hello
      </main>
    </LayoutOne>
  );
}


export const metadata: Metadata = {
  title: 'page d\'acceuil',
  description: 'Buy more than you think',
  openGraph: mergeOpenGraph({
    title: 'page d\'acceuil',
    url: '/',
  }),
}
