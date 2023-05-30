import axios, { AxiosInstance } from "axios";
import { AxiosConfig, BaseURL } from "./interface";

const baseUrlDic: { [key in BaseURL]: string } = {
  "api-eAdmin": "http://localhost:8080",
};

export const getAxiosInstance = ({ baseURL }: AxiosConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrlDic[baseURL],
  });

  return axiosInstance;
};
