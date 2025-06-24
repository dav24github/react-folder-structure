import { AxiosInstance } from "axios";
import {
  onRequestErrorInterceptor,
  onRequestInterceptor,
} from "./request.interceptor";
import {
  onResponseErrorInterceptor,
  onResponseInterceptor,
} from "./response.interceptor";

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  // Prevent override
  axiosInstance.interceptors.request.clear();
  axiosInstance.interceptors.response.clear();

  axiosInstance.interceptors.request.use(
    onRequestInterceptor,
    onRequestErrorInterceptor
  );

  axiosInstance.interceptors.response.use(
    onResponseInterceptor,
    onResponseErrorInterceptor
  );

  return axiosInstance;
};
