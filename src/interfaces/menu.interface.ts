export interface MenuItems {
  id: number;
  icon: React.ReactNode;
  name: string;
  href: string;
}

export interface Product {
  name: string;
  img?: string;
  category?: string;
  price: string;
}
export interface ProductWithId extends Product {
  id: string;
}
