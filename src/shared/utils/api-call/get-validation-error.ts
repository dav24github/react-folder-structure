import { TypeWithKey } from "@/types";

export const getValidationError = (errorCode?: string): string | null => {
  if (!errorCode) return null;

  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST:
      "El servidor no puede encontrar el recurso solicitado pero puede estar disponible en el futuro.",
    ERR_UNKNOWN: "Error desconocido",
    ERR_NETWORK: "Se rompió la red",
    ERR_TIMEOUT: "Se acabó el tiempo",

    // ERR_400: "...",
    // ERR_409: "...",
    // ERR_401: "...",
    // ERR_403: "...",

    ERR_500: "Se presento un error, comuniquese con soporte",
  };

  return codeMatcher[errorCode];
};
