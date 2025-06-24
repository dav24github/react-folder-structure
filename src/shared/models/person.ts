import { TOptions } from "@/types";

export type Person = {
  generalInfo: GeneralInfo;
  education: { items: Education[]; status: boolean };
  experiences: { items: Experience[]; status: boolean };
  courses: { items: Course[]; status: boolean };
  emergency: Emergency;
  relatives: { items: RelativePerson[]; status: boolean };
  hobbies: Hobbies;
  status: boolean;
};

export type FormsStatus = {
  generalInfo: boolean;
  education: boolean;
  experiences: boolean;
  courses: boolean;
  emergency: boolean;
  relatives: boolean;
  hobbies: boolean;
};

export type GeneralInfo = {
  ci: string;
  complement: string;
  CIComplement: string;
  name: string;
  secondName: string;
  firstLastname: string;
  secondLastname: string;
  marriedLastname: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  dateBirth: string;
  direction: string;
  documentType: TOptions | null;
  gender: TOptions | null;
  genderIdentity: TOptions | null;
  maritalStatus: TOptions | null;
  countryLiveIn: TOptions | null;
  cityLiveIn: TOptions | null;
  countryBirth: TOptions | null;
  cityBirth: TOptions | null;
  issued: TOptions | null;
  status: boolean | null;
};
export type Education = {
  id: string;
  name: string;
  entity: string;
  startDate: string;
  endDate: string;
  description: string;
  country: TOptions | null;
  city: string;
  degree: TOptions | null;
  inProgress: boolean;
};
export type Experience = {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  employment: TOptions | null;
  country: TOptions | null;
  city: string;
  inProgress: boolean;
};
export type Course = {
  id: string;
  name: string;
  institution: string;
  startDate: string;
  endDate: string;
  inProgress: boolean;
};
export type Emergency = {
  blood: TOptions | null;
  allergies: TOptions[];
  referencePerson: ReferencePerson | null;
  status: boolean;
};
export type ReferencePerson = {
  id: string;
  name: string;
  phoneNumber: string;
  kinship: TOptions | null;
};
export type RelativePerson = {
  id: string;
  name: string;
  lastname: string;
  dateBirth: string;
  kinship: TOptions | null;
};
export type Hobbies = {
  main: TOptions[];
  others: TOptions[];
  status: boolean;
};
