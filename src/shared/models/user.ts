import { UrlRoutes } from "@/types";

export type AuthUser = {
  id: string;
  username: string;
  name: string | null;
  fullname: string | null;
  role: "admin" | "leader" | "hr" | "worker" | null;
  resetCredencial: boolean | null;
  modules: string[] | null;
  access: Access[];
  expiresIn: number;
  idCompany: string | null;
};

export type Access = {
  name: string;
  icon?: any;
  url: UrlRoutes | UrlRoutes[];
  nestedItems?: Access[];
  group?: number;
};

export type User = AuthUser & {
  profile: string | null;
};
