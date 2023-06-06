/* eslint-disable @next/next/no-img-element */
"use client";
import DeleteIcon from "@/components/icons/deleteIcon";
import EditIcon from "@/components/icons/editIcon";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
} from "@tremor/react";
import {
  deleteProductService,
  getOneProductService,
  getProductsService,
} from "../api";
import useProductOperations from "../hooks/useProductOperations";
import useProductModal from "../hooks/useProductModal";
import ProductModalComponent from "./productModalComponent";
import { Product, ProductWithId } from "@/interfaces/product.interface";
import { Form } from "./Form";
import toast, { Toaster } from "react-hot-toast";
import { useCallback, useEffect, useMemo, useState } from "react";
import DeleteModal from "./deleteModal";
import { useProducts } from "@/contexts/ProductsContext";

export function ProductTable() {
  const { setShowModal, showModal } = useProductModal();

  const {
    onSubmit,
    handleChangeName,
    product,
    setProduct,
    handleChangePrice,
    handleChangeCategory,
    setEditingProduct,
    editingProduct,
    isLoading,
  } = useProductOperations();

  const { productList, setProductList } = useProducts();

  const [productToDelete, setProductToDelete] = useState(null);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await deleteProductService(id);
        setProductList((prevList) =>
          prevList.filter((product) => product.id !== id)
        );
        toast.success("Producto eliminado");
      } catch (error) {
        console.log("Error al eliminar", error);
        toast.error("Problema al eliminar");
      } finally {
        setProductToDelete(null);
      }
    },
    [setProductList]
  );

  const handleEdit = async (id) => {
    try {
      const productOne: Product = await getOneProductService(id);

      setShowModal(true);
      setEditingProduct(id);
      setProduct({ ...productOne });
    } catch (error) {
      console.log("error al editar", error);
    }
  };

  const productTableData = useMemo(() => {
    return productList?.map((item) => {
      return {
        id: item.id,
        name: item.name,
        image: item.image
          ? item.image
          : "https://images.hola.com/imagenes/moda/tendencias/20220118202858/calzado-tipos-de-zapatos-basicos/1-40-351/salones-stilettos-a.jpg",
        category: item.category,
        price: item.price,
      };
    });
  }, [productList]);

  const handleConfirmDelete = () => {
    if (productToDelete) {
      handleDelete(productToDelete.id);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Imagen</TableHeaderCell>
              <TableHeaderCell>Categoría</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Precio ($)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">Acción</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productTableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 rounded-md"
                  />
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
                <TableCell>
                  <div className="flex flex-row justify-center items-center">
                    <button onClick={() => setProductToDelete(item)}>
                      <DeleteIcon className="h-6 w-6" />
                    </button>
                    <button onClick={() => handleEdit(item.id)}>
                      <EditIcon className="h-6 w-6" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Toaster />
      </Card>
      {showModal && (
        <ProductModalComponent setShowModal={setShowModal}>
          <Form
            handleChangeName={handleChangeName}
            handleChangePrice={handleChangePrice}
            handleChangeCategory={handleChangeCategory}
            product={product}
            onSubmit={onSubmit}
            updatingProduct={editingProduct}
          />
        </ProductModalComponent>
      )}
      {productToDelete && (
        <DeleteModal
          setShowModal={setProductToDelete}
          title="Eliminar producto"
          content={`¿Estás seguro de que deseas eliminar el producto "${productToDelete.name}"? `}
          footer={"Esta acción no se puede deshacer"}
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={handleConfirmDelete}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </>
  );
}
