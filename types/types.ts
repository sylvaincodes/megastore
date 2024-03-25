export interface Product{
    id: string;
    name: string;
    price: number;
    images: Array<string>;
    category: string;
    color: string;
    brand: string;
    size: string;
    discount: number;
    ratings: number;
    createdAt: any;
}

export interface Category {
    id: string;
    name: string;
    images: Array<string>;
}

export interface WidgetTypes {
    id: string;
    name: string;
    type: string;
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
