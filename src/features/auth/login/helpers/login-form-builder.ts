import { VALIDATORS } from "@/constants";
import { FormBuilder, TypeWithKey } from "@/types";

export const loginFormBuilder = (): TypeWithKey<FormBuilder> => ({
  username: {
    value: "",
    validations: [VALIDATORS.required()],
  },
  password: {
    value: "",
    validations: [VALIDATORS.required()],
  },
});
