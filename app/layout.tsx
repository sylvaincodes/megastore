import type { Metadata } from "next";
import "./globals.css";
import { josefinSans } from "./fonts";
import {mergeOpenGraph} from '@/lib/mergeOpenGraph'
import { Providers } from "@/providers";

// setup default seo
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  applicationName:'megastore',
  keywords:["nextjs", 'ecommerce','shop'],
  authors: [{ name: 'sylvaincodes', url: 'https://sylvaincodes.vercel.app' }],
  publisher:'vercel',

  alternates:{
    canonical:'/',
    languages:{
      'fr': '/fr'
    }
  },


  robots:{
    index: false,
    follow:true,
    nocache: true,
    googleBot:{
      index:true,
      noimageindex:false,
    }
  },

  manifest: ` ${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.json`,

  icons:{
    icon: '/favicon.ico',
    shortcut:'/favicon.ico',
    apple:'favicon.ico'
  },

  twitter:{
    card: 'summary_large_image',
    title: 'Ecommerce website',
    description: 'Mega store',
    siteId: '',
    creator: 'sylvaincodes',
    images:[`${process.env.NEXT_PUBLIC_SERVER_URL}/og.png`]
  },

  openGraph:mergeOpenGraph()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
          <body className={josefinSans.className}>
            <Providers>
              {children}
            </Providers>
          </body>
      </html>
  );
}
