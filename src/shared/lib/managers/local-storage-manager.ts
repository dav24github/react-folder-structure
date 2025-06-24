import { TypeWithKey } from "@/types";

export const saveInLocalStorage = (
  key: string,
  value: TypeWithKey<any> | string | number | null
) => {
  localStorage.setItem(
    key,
    typeof value === "object"
      ? JSON.stringify(value ?? "")
      : (value ?? "").toString()
  );
};

export const getInLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return result !== undefined && result !== null
    ? result[0] !== "{"
      ? result
      : JSON.parse(result)
    : undefined;
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
