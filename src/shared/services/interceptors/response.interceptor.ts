import { AxiosError, AxiosResponse } from "axios";

import { getValidationError } from "@/utils";
import { PopUpUtilities } from "@/services/popup.service";
import { LoadingService } from "@/services/loading.service";

export const onResponseInterceptor = (
  response: AxiosResponse
): AxiosResponse => {
  LoadingService.setSubject(false);
  if (response.config.headers["inprogress"] === "true") {
    PopUpUtilities.close();
  }
  return response ? response.data : response;
};

export const onResponseErrorInterceptor = (
  error: AxiosError
): Promise<AxiosError> => {
  LoadingService.setSubject(false);
  console.log(error);

  if (
    error.response &&
    error.code !== "ERR_CANCELED" &&
    error.config?.headers["ERROR_NOTIFICATION"] !== "false" &&
    (error.config?.method !== "get" ||
      error.config?.headers["ERROR_NOTIFICATION"] !== undefined)
  ) {
    let message;
    if (Array.isArray((error.response.data as any as any)?.errors)) {
      message = (error.response.data as any as any).errors
        .map((obj: any) => obj.msg)
        .join(", ");
    } else {
      message = (error.response.data as any).errors?.detail
        ? (error.response.data as any).errors.detail
        : "Se presento un error, comuniquese con soporte";
    }

    if (error.response.status === 400) {
      PopUpUtilities.warning(message);
    } else {
      PopUpUtilities.error(message ?? getValidationError(error.code) ?? "");
    }
  }

  return Promise.reject(error);
};
