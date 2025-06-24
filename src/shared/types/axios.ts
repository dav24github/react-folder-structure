import { AxiosResponse } from "axios";

export type AxiosCall<T, D = T> = {
  call: Promise<AxiosResponse<T>>;
  controller: AbortController;
  adapter?: (data: T, extraData?: any) => D;
};
