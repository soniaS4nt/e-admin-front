import { useState } from "react";
import { Product } from "../components/productTable";
import { createProductService, updateProductService } from "../api";
import router from "next/router";

export default function useProductOperations() {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, name: event.target.value });
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, price: event.target.value });
  };

  const onSubmit = () => {
    if (editingProduct) {
      updateProductService(editingProduct, product);
      setEditingProduct(null);
    } else {
      createProductService(product);
    }
    router.push("/product");
  };

  return {
    handleChangeName,
    handleChangePrice,
    onSubmit,
    setProduct,
    product,
    setEditingProduct,
    editingProduct,
  };
}
