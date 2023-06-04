export interface Product {
  name: string;
  img?: string;
  category?: string;
  price: string;
}
export interface ProductWithId extends Product {
  id?: string;
}
