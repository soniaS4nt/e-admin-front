import React, { createContext, useState, useContext } from "react";
import { ProductWithId } from "@/interfaces/product.interface";

interface ProductsContextType {
  productList: ProductWithId[];
  setProductList: React.Dispatch<React.SetStateAction<ProductWithId[]>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [productList, setProductList] = useState<ProductWithId[]>([]);

  return (
    <ProductsContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
