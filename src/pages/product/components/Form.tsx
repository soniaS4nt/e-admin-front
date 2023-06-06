import { TextInput } from "@tremor/react";
import { selectItems } from "@/helpers/selectItems";
import Button from "./Button";
import ImageUpload from "@/components/ImageUpload";

export function Form({
  handleChangeName,
  handleChangePrice,
  handleChangeCategory,
  product,
  onSubmit,
  updatingProduct,
}) {
  return (
    <form onSubmit={onSubmit}>
      <h1 className="mb-3 font-extrabold text-2xl">
        {updatingProduct ? "Modificar Producto" : "Crear Producto"}
      </h1>
      <hr />
      <ImageUpload />
      <div className="my-4">
        <label
          htmlFor="product-name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre del Producto
        </label>
        <TextInput
          id="product-name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ingrese el nombre del producto"
          name="name"
          value={product?.name}
          onChange={handleChangeName}
          /*  errorMessage="Tienes que agregar un nombre" */
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
        <TextInput
          id="product-price"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ingrese el precio del producto"
          name="price"
          value={product?.price}
          onChange={handleChangePrice}
          /*  errorMessage="Tienes que agregar un precio" */
          required
        />
      </div>
      <div className="mb-4 flex flex-row justify-between">
        <h1>Selecciona una categoría</h1>
        <label
          htmlFor="selectCategory"
          className="shadow appearance-none rounded py-2 px-3  focus:outline-none border"
        >
          <select
            name="category"
            id="selectCategory"
            value={product.category}
            onChange={handleChangeCategory}
            className="w-full px-2 mx-auto"
          >
            {selectItems.map((select) => (
              <option key={select.id} value={select.value}>
                {select.text}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex justify-end">
        <Button type="submit">{updatingProduct ? "Editar" : "Crear"}</Button>
      </div>
    </form>
  );
}
