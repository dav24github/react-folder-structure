import { CallMethods } from "@/types";
import { axiosCall } from "@/utils";
import { Auth, LoginRequest, LoginResponse } from "../types/auth.types";
import { loginAdapter } from "../adapters/login.adapter";

export const loginService = (data: LoginRequest) => {
  return axiosCall<LoginResponse, Auth>(
    CallMethods.POST,
    "v1/auth/login",
    { data },
    loginAdapter
  );
};
