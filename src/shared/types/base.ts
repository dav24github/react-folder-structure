import { Dayjs } from "dayjs";
export type TypeWithKey<T> = { [key: string]: T };

export type UploadExcelFile = TypeWithKey<string | number | null>;

export type TModule = {
  route: string;
  label: string;
  component: JSX.Element;
};

export type Validation = {
  name?: string;
  msg?: string;
  val?: any;
  ref?: any;
  val1?: any;
  val2?: any;
  ref1?: any;
  refVal?: any;
  required?: boolean;
};

export type recursiveBuilderType = TypeWithKey<
  FormBuilder | TypeWithKey<FormBuilder>[]
>;

export type FormBuilder = {
  value: string | number | boolean | Dayjs;
  validations?: Validation[];
};

export type ErrorBoundaryState = {
  hasError: boolean;
  loadedData: any;
  isTitledCard: boolean;
  isPage: boolean;
  isModule: boolean;
  error: boolean;
};

export type TModal<T> = {
  trigger?: boolean;
  show?: boolean;
  payload: T;
};

export type TDayKeys =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TDayHoursKeys =
  | "mondayHours"
  | "tuesdayHours"
  | "wednesdayHours"
  | "thursdayHours"
  | "fridayHours"
  | "saturdayHours"
  | "sundayHours";

export type TDayKeysES =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export type FormatExcel = {
  id: string;
  name: string;
  format: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
};
