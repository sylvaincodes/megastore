import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hello
    </main>
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
