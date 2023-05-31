/* eslint-disable @next/next/no-img-element */
import router from "next/router";
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
  updateProductService,
  getOneProductService,
} from "../api";
import { useContext, useEffect } from "react";
import useProductOperations from "../hooks/useProductOperations";
import useProductModal from "../hooks/useProductModal";
import ProductModalComponent from "./productModalComponent";
import { Product, ProductWithId } from "@/interfaces/menu.interface";

interface Props {
  products: ProductWithId[];
}
export function ProductTable({ products }: Props) {
  const { setShowModal, showModal } = useProductModal();

  const {
    onSubmit,
    handleChangeName,
    product,
    setProduct,
    handleChangePrice,
    setEditingProduct,
    editingProduct,
  } = useProductOperations();

  const handleDelete = (id) => {
    try {
      deleteProductService(id);
    } catch (error) {
      console.log("error al eliminar");
    }
    router.push("/product");
  };

  const handleEdit = async (id) => {
    try {
      const productOne: Product = await getOneProductService(id);

      setEditingProduct(id);
      setProduct({ name: productOne.name, price: productOne.price });

      setShowModal(true);
    } catch (error) {
      console.log("error al editar");
    }

    router.push("/product");
  };

  return (
    <>
      {" "}
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell> Nombre </TableHeaderCell>
              <TableHeaderCell>Imagen</TableHeaderCell>
              <TableHeaderCell>Categoría</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Precio ($){" "}
              </TableHeaderCell>
              <TableHeaderCell className="text-center">Acción</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-left">
                  <img
                    src={
                      item.img
                        ? item.img
                        : "https://images.hola.com/imagenes/moda/tendencias/20220118202858/calzado-tipos-de-zapatos-basicos/1-40-351/salones-stilettos-a.jpg"
                    }
                    alt={item.name}
                    className="w-12 rounded-md"
                  />
                </TableCell>
                <TableCell>
                  {item.category ? item.category : "agrega una categoría"}
                </TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
                <TableCell className="flex flex-row justify-center items-center">
                  <button onClick={() => handleDelete(item.id)}>
                    <DeleteIcon className={"h-6 w-6 "} />
                  </button>

                  <button onClick={() => handleEdit(item.id)}>
                    <EditIcon className={"h-6 w-6 "} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {showModal && (
        <ProductModalComponent
          setShowModal={setShowModal}
          product={product}
          handleChangeName={handleChangeName}
          handleChangePrice={handleChangePrice}
          onSubmit={onSubmit}
          updatingProduct={editingProduct}
        />
      )}
    </>
  );
}
