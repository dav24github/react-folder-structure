import { axiosInstance } from "@/services/axios.service";
import { loadAbort } from "./axios-load-abort";
import { CallMethods, TypeWithKey } from "@/types";
import { AxiosCall } from "@/types/axios";
import { AxiosProgressEvent } from "axios";
import { LoadingService, PopUpService, PopUpUtilities } from "@/services";

type CallConfig = {
  onUploadProgress?: boolean;
  data?: TypeWithKey<any>;
  params?: TypeWithKey<string | number | boolean | undefined>;
  headers?: TypeWithKey<string>;
};

export const axiosCall = <T = any, D = T>(
  method: CallMethods,
  url: string,
  callConfig?: CallConfig,
  adapter?: (data: T, extraData?: any) => D
): AxiosCall<T, D> => {
  const controller = loadAbort();
  const popUpService$ = PopUpService.getSubject();
  let cancelProgress = false;
  const config = {
    params: callConfig?.params,
    headers: callConfig?.headers,
    signal: controller.signal,
    onUploadProgress: callConfig?.onUploadProgress
      ? (progressEvent: AxiosProgressEvent) => {
          const subsciption = popUpService$.subscribe((value) => {
            if (value.type === "error") cancelProgress = true;
            if (value.type === "cancel") {
              cancelProgress = true;
              controller.abort();
            }
          });
          if (
            !cancelProgress &&
            progressEvent.total &&
            progressEvent.progress
          ) {
            const progress = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            if (progress < 99) {
              PopUpUtilities.inProgress(progress.toString());
            } else {
              LoadingService.setSubject(true);
              PopUpUtilities.close();
              subsciption.unsubscribe();
            }
          } else {
            subsciption.unsubscribe();
          }
        }
      : undefined,
  };
  switch (method) {
    case CallMethods.GET:
      return {
        call: axiosInstance.get<T>(url, config),
        controller,
        adapter,
      };
    case CallMethods.POST:
      return {
        call: axiosInstance.post<T>(url, callConfig?.data, config),
        controller,
        adapter,
      };
    case CallMethods.PUT:
      return {
        call: axiosInstance.put<T>(url, callConfig?.data, config),
        controller,
        adapter,
      };
    case CallMethods.DELETE:
      return {
        call: axiosInstance.delete<T>(url, {
          data: callConfig?.data,
          ...config,
        }),
        controller,
        adapter,
      };
  }
};

export function sleep(ms = 2000): Promise<void> {
  console.log("Kindly remember to remove `sleep`");
  return new Promise((resolve) => setTimeout(resolve, ms));
}
