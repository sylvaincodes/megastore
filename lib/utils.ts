import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getNewPrice(price: number,discount: number){
  let discount_price = price * (discount/100)
  return (price - discount_price);
}

export function getDiscountPrice(price: number,discount: number){
  
  let discount_price = price * (discount/100);
  return discount_price;
}