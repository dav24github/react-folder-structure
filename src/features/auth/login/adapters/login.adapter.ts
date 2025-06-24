import { jwtDecode } from "jwt-decode";
import { Auth, LoginResponse } from "../types/auth.types";
import { AuthUser } from "@/models";
import { removeNullItems, wordsSpacer } from "@/utils";
import { attendanceNavigationAdapter, navigationAdapter } from "@/adapters";
import { modulesMap } from "@/constants/access";

export const loginAdapter = (data: LoginResponse): Auth => {
  const token = data.token;
  const decodedToken = jwtDecode<any>(token);

  if (!decodedToken.privileges) {
    // WORKER-ATTENDANCE
    const authUser: AuthUser = {
      id: decodedToken.id,
      username: decodedToken.username,
      idCompany: decodedToken.id_company,
      access: attendanceNavigationAdapter(),
      expiresIn: decodedToken.exp,
      name: null,
      fullname: null,
      resetCredencial: null,
      modules: null,
      role: null,
    };

    return {
      authUser,
      token,
    };
  } else {
    const authUser: AuthUser = {
      id: decodedToken.id,
      username: decodedToken.username,
      name: decodedToken.name,
      fullname: wordsSpacer(
        decodedToken.name,
        decodedToken.second_name,
        decodedToken.first_lastname,
        decodedToken.second_lastname
      ),
      role: getRole(decodedToken.role),
      resetCredencial: decodedToken.must_reset_password,
      modules: removeNullItems(
        data.modules.map((obj) => modulesMap[obj as string])
      ),
      access: navigationAdapter(
        decodedToken.privileges.map((obj: any) => ({
          name: obj.name,
          items: obj.privileges.map((ob: any) => ob.label),
        }))
      ),
      expiresIn: decodedToken.exp,
      idCompany: null,
    };

    return {
      authUser,
      token,
    };
  }
};

const getRole = (role: string) => {
  return role === "admin"
    ? "admin"
    : role === "rrhh"
    ? "hr"
    : role === "lider"
    ? "leader"
    : "worker";
};
