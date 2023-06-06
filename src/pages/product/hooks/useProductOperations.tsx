import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  createProductService,
  getProductsService,
  updateProductService,
} from "../api";
import { ProductWithId } from "@/interfaces/product.interface";
import toast from "react-hot-toast";
import { useProducts } from "@/contexts/ProductsContext";

export default function useProductOperations() {
  const [product, setProduct] = useState<ProductWithId>({
    name: "",
    category: "Mujer",
    price: "",
  });
  const { productList, setProductList } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, name: event.target.value });
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProduct({ ...product, category: event.target.value });
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, price: event.target.value });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsService();
        setProductList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      }
    };

    fetchProducts();
  }, [isLoading, setIsLoading, setProductList]);

  const handleCreateProduct = async () => {
    try {
      await createProductService(product);
      setProduct({ name: "", category: "Mujer", price: "" });
      setProductList((prevList) => {
        return [...prevList, product];
      });
      toast.success("Producto creado", { position: "bottom-center" });
    } catch (error) {
      console.log("Error al crear el producto", error);
      toast.error("Error al crear el producto", { position: "bottom-center" });
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await updateProductService(editingProduct, product);
      const updatedList = productList.map((p) =>
        p.id === editingProduct.id ? product : p
      );
      setProductList(updatedList);
      setEditingProduct(null);
      toast.success("Producto editado", { position: "bottom-center" });
    } catch (error) {
      console.log("Error al editar el producto", error);
      toast.error("Error al editar el producto", { position: "bottom-center" });
    }
  };
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (editingProduct) {
      await handleUpdateProduct();
    } else {
      await handleCreateProduct();
    }
  };

  return {
    handleChangeName,
    handleChangePrice,
    onSubmit,
    setProduct,
    product,
    setEditingProduct,
    editingProduct,
    handleChangeCategory,
    isLoading,
  };
}
