import { TypeWithKey } from "@/types";

export const cleanObject = <T>(obj: TypeWithKey<any>) => {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj as T;
};

export const findProp = (
  obj: TypeWithKey<any>,
  props: string,
  defval?: any
) => {
  if (typeof defval == "undefined") defval = null;
  const prop = props.split(".");
  for (var i = 0; i < prop.length; i++) {
    if (typeof obj[prop[i]] == "undefined") return defval;
    obj = obj[prop[i]];
  }
  return obj;
};

export const isEmptyObject = (obj: TypeWithKey<any>) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const isEqual = function (obj1: any, obj2: any) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      if (typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
        if (!isEqual(obj1[objKey], obj2[objKey])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
};
