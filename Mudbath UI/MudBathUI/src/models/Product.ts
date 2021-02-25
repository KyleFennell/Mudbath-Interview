import { Price } from "./Price"

export interface Product {
    id: Number;
    name: String;
    description: String;
    price: Price;
    relatedProducts: Number[];
}