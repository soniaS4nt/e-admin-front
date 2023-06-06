import { ProductTable } from "./components/productTable";
import useProductModal from "./hooks/useProductModal";
import ProductModalComponent from "./components/productModalComponent";
import useProductOperations from "./hooks/useProductOperations";
import { ProductsProvider } from "@/contexts/ProductsContext";
import { Form } from "./components/Form";

export default function ProductPage() {
  const { setShowModal, showModal } = useProductModal();

  const {
    onSubmit,
    handleChangeName,
    handleChangePrice,
    handleChangeCategory,
    editingProduct,
    product,
  } = useProductOperations();
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
      </div>

      <ProductTable />
    </>
  );
}
