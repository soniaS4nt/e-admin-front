export interface Product {
  name: string;
  image?: string;
  category: string;
  price: string;
}
export interface ProductWithId extends Product {
  id?: string;
}
