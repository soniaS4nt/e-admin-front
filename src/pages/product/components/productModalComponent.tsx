export default function ProductModalComponent({
  setShowModal,
  product,
  handleChangeName,
  handleChangePrice,
  onSubmit,
  updatingProduct,
}) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <button onClick={() => setShowModal(false)} className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <form>
              <h1 className="mb-3 font-extrabold text-2xl">
                {updatingProduct ? "Modificar Producto" : "Crear Producto"}
              </h1>
              <hr />
              <div className="my-4">
                <label
                  htmlFor="product-name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  id="product-name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese el nombre del producto"
                  name="name"
                  value={product.name}
                  onChange={handleChangeName}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="product-price"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Precio del Producto
                </label>
                <input
                  type="number"
                  id="product-price"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese el precio del producto"
                  name="price"
                  value={product.price}
                  onChange={handleChangePrice}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={onSubmit}
                >
                  {updatingProduct ? "Modificar" : "Crear"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
