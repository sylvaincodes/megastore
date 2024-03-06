export interface Product{
    id: string;
    name: string;
    price: number;
    images: Array<string>;
    category: string;
    color: string;
    size: string;
}

export interface Category {
    id: string;
    name: string;
}