import { Product } from "./Product";

export interface SaleItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface Sale {
  items: SaleItem[];
  discount: number;
  total: number;
  createdAt?: string;
}
