import { AxiosError, InternalAxiosRequestConfig } from "axios";

import { getInLocalStorage } from "@/utils";
import { LocalStorageKeys } from "@/types";
import { LoadingService } from "@/services/loading.service";

export const onRequestInterceptor = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  request.timeout = 20000;

  if (request.url?.includes("user")) {
    const authUser = getInLocalStorage(LocalStorageKeys.AUTH_USER);
    request.url = request.url.replace("$id", authUser.id);
  }

  if (
    (request.headers["loading"] === undefined && request.method !== "get") ||
    (request.headers["loading"] !== undefined &&
      request.headers["loading"] === "true")
  ) {
    LoadingService.setSubject(true);
  }

  return updateHeaderWithToken(request);
};

export const onRequestErrorInterceptor = (
  error: AxiosError
): Promise<AxiosError> => {
  LoadingService.setSubject(false);

  console.error(`=>[request error] [${error}]`);

  return Promise.reject(error);
};

const updateHeaderWithToken = (request: InternalAxiosRequestConfig) => {
  const token = getInLocalStorage(LocalStorageKeys.TOKEN);
  if (token) request.headers["token"] = token;

  return request;
};
