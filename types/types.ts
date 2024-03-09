export interface Product{
    id: string;
    name: string;
    price: number;
    images: Array<string>;
    category: string;
    color: string;
    size: string;
    discount: number;
}

export interface Category {
    id: string;
    name: string;
    images: Array<string>;
}

export interface Daily {
    id: string;
    name: string;
    images: Array<string>;
    offer: string;
}

export interface Brand {
    id: string;
    name: string;
    name_bg: string;
    icon: Array<string>;
    images: Array<string>;
    product: Array<string>;
    text: string;
    color: string;
}
