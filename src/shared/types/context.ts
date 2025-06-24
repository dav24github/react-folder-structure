import { VacationRequest } from "@/models";
import { TypeWithKey } from "./base";
import { TOptions } from "./props";

export type UICtx = {
  mobileOpenMenu: boolean;
  expandedMenu: boolean;
  onUpdateExpandedMenu: (val: boolean) => void;
  onUpdateMobileOpenMenu: (val: boolean) => void;
  resetUICtxt: () => void;
};

export type HomeCtx = {
  homeData: HomeCtxData | null;
  getAndStoreHomeData: () => void;
  getAndStoreVacationHomeData: () => void;
  getAndStoreBirthdaysHomeData: () => void;
  getAndStoreNewUsersHomeData: () => void;
};
export type HomeCtxData = {
  monthlyUpdates: TMonthlyUpdates;
  vacation: {
    days: number;
  };
};
export type TMonthlyUpdates = {
  birthdays: {
    detail: HomeBirthday[] | null;
    total: number;
  };
  newUsers: {
    detail: HomeNewUser[] | null;
    total: number;
  };
  vacation: {
    detail: VacationHomeRequest[] | null;
    total: number;
  };
};
export type HomeNewUser = {
  id: string;
  name: string;
  job: string;
  profile: string;
};
export type HomeBirthday = {
  id: string;
  name: string;
  job: string;
  date: string;
  profile: string;
};
export type VacationHomeRequest = Partial<VacationRequest> & {
  profile: string;
};

export type LocationSelectOptionsCtx = {
  countries: TOptions[] | null;
  cities: TypeWithKey<TOptions[]> | null;
  bolivianIssuedLoc: TOptions[] | null;
  regionals: TOptions[] | null;
  getAndStoreLocationSelectOptions: () => void;
  getAndStoreRegionalsSelectOptions: () => void;
  resetLocationSelectOptionsCtx: () => void;
};

export type WorkerSelectOptionsCtx = {
  workers: (TOptions & { ci: string })[] | null;
  subsidies: TOptions[] | null;
  paymentMethods: TOptions[] | null;
  afps: TOptions[] | null;
  contractTypes: TOptions[] | null;
  contractFormats: TOptions[] | null;
  insurances: TOptions[] | null;
  jobClassifications: TOptions[] | null;
  reasonOfLeaving: TOptions[] | null;
  bosses: TOptions[] | null;
  getAndStoreWorkers: (status?: boolean) => void;
  getAndStorePaymentMethodsSelectOptions: () => void;
  getAndStoreSubsidiesSelectOptions: () => void;
  getAndStoreWorkerSelectOptions: () => void;
  resetWorkerSelectOptionsCtx: () => void;
  resetWorkersCtx: () => void;
};
