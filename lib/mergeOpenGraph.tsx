import type { Metadata } from "next";

//serve à optimiser le partage de la page sur les réseaux sociaux
const defaultOpenGraph: Metadata['openGraph'] = {
    title: 'Mega store',
    description: '¨Plateforme ecommerce de vente de tout produits',
    images:[
        {
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/images/og-image.png`
        }
    ],
    type: 'website',
    url:  `${process.env.NEXT_PUBLIC_SERVER_URL}`
}

export const mergeOpenGraph = (og?: Metadata['openGraph']) => {

    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images :  defaultOpenGraph.images,
        title: og?.title ? og.title :  defaultOpenGraph.title,
        url: og?.url ? og.url :  defaultOpenGraph.url,
    }
}