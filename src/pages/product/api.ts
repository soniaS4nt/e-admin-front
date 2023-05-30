import { getAxiosInstance } from "@/services/axiosInstance";
import { Product } from "./components/productTable";
import { AxiosResponse } from "axios";

export const getProductsService = async (): Promise<Product[]> => {
  const response: AxiosResponse<Product[]> = await getAxiosInstance({
    baseURL: "api-eAdmin",
  }).get(`/api/products/getAll`);
  return response.data;
};

export const createProductService = async (
  product: Product
): Promise<Product> => {
  const response: AxiosResponse<Product> = await getAxiosInstance({
    baseURL: "api-eAdmin",
  }).post(`/api/products/create`, product);
  return response.data;
};

export const deleteProductService = async (id: string) => {
  const response: AxiosResponse<null> = await getAxiosInstance({
    baseURL: "api-eAdmin",
  }).delete(`/api/products/deleteBy/${id}`);
  return response;
};

export const updateProductService = async (id: any, product: Product) => {
  const response: AxiosResponse<Product> = await getAxiosInstance({
    baseURL: "api-eAdmin",
  }).patch(`/api/products/updateBy/${id}`, product);
  return response;
};
