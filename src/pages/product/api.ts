import { Product, ProductWithId } from "@/interfaces/product.interface";
import { getAxiosInstance } from "@/services/axiosInstance";
import { AxiosResponse } from "axios";

export const getProductsService = async (): Promise<ProductWithId[]> => {
  const response: AxiosResponse<ProductWithId[]> = await getAxiosInstance({
    baseURL: "api-products",
  }).get(`/getAll`);
  const { data } = response;
  return data;
};

export const createProductService = async (
  product: Product
): Promise<ProductWithId> => {
  const response: AxiosResponse<ProductWithId> = await getAxiosInstance({
    baseURL: "api-products",
  }).post(`/create`, product);
  const { data } = response;
  return data;
};

export const deleteProductService = async (id: string) => {
  const response: AxiosResponse<null> = await getAxiosInstance({
    baseURL: "api-products",
  }).delete(`/deleteBy/${id}`);
  const { data } = response;
  return data;
};

export const getOneProductService = async (id: string) => {
  const response: AxiosResponse<ProductWithId> = await getAxiosInstance({
    baseURL: "api-products",
  }).get(`/getBy/${id}`);
  const { data } = response;
  return data;
};

export const updateProductService = async (
  id: string,
  product: Product
): Promise<ProductWithId> => {
  const response: AxiosResponse<ProductWithId> = await getAxiosInstance({
    baseURL: "api-products",
  }).patch(`/updateBy/${id}`, product);
  const { data } = response;
  return data;
};
