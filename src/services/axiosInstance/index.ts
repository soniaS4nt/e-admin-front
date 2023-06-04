import axios, { AxiosInstance } from "axios";
import { AxiosConfig, BaseURL } from "./interface";

const baseUrlDic: { [key in BaseURL]: string } = {
  "api-products": "http://localhost:8080/api/products",
};

export const getAxiosInstance = ({ baseURL }: AxiosConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrlDic[baseURL],
  });

  return axiosInstance;
};
