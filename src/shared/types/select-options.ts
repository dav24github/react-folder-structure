import { TypeWithKey } from "./base";
import { TOptions } from "./props";

export type LocationSelectOptions = {
  countries: TOptions[];
  cities: TypeWithKey<TOptions[]>;
  bolivianIssuedLoc: TOptions[];
};

export type RegionalsSelectOptions = {
  regionals: TOptions[];
};

export type WorkerSelectOptions = {
  afps: TOptions[] | null;
  contractTypes: TOptions[] | null;
  contractFormats: TOptions[] | null;
  insurances: TOptions[] | null;
  reasonOfLeaving: TOptions[] | null;
  jobClassifications: TOptions[] | null;
  bosses: TOptions[] | null;
};
