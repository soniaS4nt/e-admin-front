import { GetServerSideProps } from "next";
import { ProductTable } from "./components/productTable";
import { getProductsService } from "./api";
import useProductModal from "./hooks/useProductModal";
import ProductModalComponent from "./components/productModalComponent";
import useProductOperations from "./hooks/useProductOperations";

export default function ProductPage({ products }) {
  const { setShowModal, showModal } = useProductModal();
  const { onSubmit, handleChangeName, handleChangePrice, editingProduct } =
    useProductOperations();
  return (
    <>
      <div className="my-3">
        <button
          className="bg-orange-400 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Agregar Producto
        </button>
        {showModal && (
          <ProductModalComponent
            setShowModal={setShowModal}
            product={products}
            handleChangeName={handleChangeName}
            handleChangePrice={handleChangePrice}
            onSubmit={onSubmit}
            updatingProduct={editingProduct}
          />
        )}
      </div>

      <ProductTable products={products} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProductsService();

  return {
    props: {
      products,
    },
  };
};
