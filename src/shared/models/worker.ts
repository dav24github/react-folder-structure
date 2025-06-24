import { TOptions } from "@/types";
import { DateSchedules } from "./seasonal-schedules";
import { TFolder } from "@/modules/documents/types";
import { TMarkPoint } from "./settings";

export type WorkerSchedules = {
  id: string;
  fullname: string;
  position: string;
  status: "De alta" | "De baja";
  fixedSchedule: FixedSchedules | null;
};

export type TSchedules = {
  markingMethod: TMarkingMethod | null | undefined;
  fingerprintMarking: boolean | null | undefined; // only for PersonWorkerContext
  homeOffice: TMarkPoint | null | undefined; // only for PersonWorkerContext
  attendancePoints: TMarkPoint[] | null | undefined; // only for PersonWorkerContext
  device: DeviceWorker | null | undefined; // only for PersonWorkerContext // TODO: Mover a Worker
  fixed: FixedSchedules | null | undefined;
  seasonal: SeasonalSchedules | null | undefined;
};

export type DeviceWorker = {
  model: string;
  manufacturer: string;
};

export type WorkerMarkingInfo = {
  attendancePoints: TMarkPoint[];
  markingMethod: TMarkingMethod;
  fingerprintMarking: boolean;
  homeOffice: TMarkPoint | null;
};

export type Worker = {
  id: string;
  fullname: string;
  position: string;
  status: "De alta" | "De baja" | null;
  job: Job | null;
  regional: string | null;
  schedules: TSchedules;
  requests: Requests;
  team: Team;
  folders?: TFolder[];
};

export type TMarkingMethod = {
  app: boolean;
  web: boolean;
};

// JOB
export type Job = {
  corporateEmail: string;
  general: {
    code: string | null;
    office: TOptions | null;
    position: TOptions | null;
    workArea: TOptions | null;
    boss: TOptions | null;
    contract: {
      type: TOptions | null; // Tipo
      format: TOptions | null; // Modalidad
      clasification: TOptions | null;
    };
  };

  salary: {
    base: number;
    bond: number; // other salary
    costCenter: TOptions | null;
    hasSeniorityBond: boolean;
    isRetired: boolean;
    hasBorderSubsidy: boolean;
    hasDominicalSalary: boolean;
    fortnight: {
      none: boolean;
      value: number;
    };
    bank:
      | (TOptions & {
          account: string;
          customerCode: string;
        })
      | null;
  };

  insurance: (TOptions & { number: string }) | null;

  hasDisability: boolean;
  isMentor: boolean;
  afp:
    | (TOptions & {
        checked: boolean; // has_afp
        code: string;
      })
    | null;
  rcIva: {
    checked: boolean; // has_rc_iva
    code: string;
  };

  startDate: string;
  retire: {
    date: string;
    reasonRetireMinistry: TOptions | null;
  };
  observation: string;
  applyOtherSalary: boolean;
};

// SCHEDULES
export type TTime = {
  id: string;
  time: string;
};
export type Shift = {
  in: TTime;
  out: TTime;
};

export type DaySchedules = {
  mode: "day" | "night";
} & DayShifts;

export type DayShifts = {
  shift1: Shift | null | undefined;
  shift2: Shift | null | undefined;
  shift3?: Shift | null | undefined;
};

export type FixedSchedules = {
  days: {
    monday: DaySchedules;
    tuesday: DaySchedules;
    wednesday: DaySchedules;
    thursday: DaySchedules;
    friday: DaySchedules;
    saturday: DaySchedules;
    sunday: DaySchedules;
  };
  mode: "day" | "night" | "hybrid";
};

export type SeasonalSchedules = {
  group: {
    id: string;
    name: string;
  } | null;
  programming: ProgrammingSeasonalSchedules[];
};

export type ProgrammingSeasonalSchedules = {
  id: string;
  startDate: string;
  endDate: string;
  status: "En curso" | "Pendiente";
  schedules: DateSchedules[];
};

// REQUESTS
export type Requests = {
  licenses: LicensesRequest[] | null;
  vacation: VacationWorker;
  extraHours: ExtraHoursRequest[] | null;
};

export type TeamRequests = {
  licenses: LicensesRequest[] | null;
  vacation: VacationRequest[] | null;
  extraHours: ExtraHoursRequest[] | null;
};

// LICENSE
export type TLicensesRequestList = { list: LicensesRequest[]; total: number };
export type LicensesRequest = LicensesDayRequest | LicensesHourRequest;
type LicensesReq = {
  license: string;
  fileName: string;
};
export type LicensesDayRequest = RequestCommon & LicensesReq & DayRequest;
export type LicensesHourRequest = RequestCommon & LicensesReq & HourRequest;

// VACATION
export type VacationWorker = {
  earnedDays: number | null;
  spentDays: number | null;
  totalDays: number | null;
  table: VacationRequest[] | null;
};
export type TVacationRequestList = { list: VacationRequest[]; total: number };
export type VacationRequest = VacationDayRequest | VacationHourRequest;
type VacationReq = {
  days: number;
};
export type VacationDayRequest = RequestCommon & VacationReq & DayRequest;
export type VacationHourRequest = RequestCommon & VacationReq & HourRequest;

// EXTRA HOURS
export type TExtraHoursRequestList = {
  list: ExtraHoursRequest[];
  total: number;
};
export type ExtraHoursRequest = RequestCommon & ExtraHoursReq & HourRequest;
type ExtraHoursReq = {
  type: string;
  hours: number;
  daytime: number;
  nighttime: number;
};

export type RequestCommon = {
  id: string;
  name: string;
  job: string;
  requestDate: string;
  approvalDate: string;
  status: "Aprobado" | "Negado" | "Pendiente";
  description: string;
  approver: string;
  idUser?: string;
};
export type DayRequest = {
  startDate: string;
  endDate: string;
};
export type HourRequest = {
  startHour: string;
  endHour: string;
  date: string;
};

// TEAM
export type Team = {
  members: any[] | null;
  requests: TeamRequests;
};

//MERBERS
export type TeamMembersRequest = {
  id: string;
  fullname: string;
  dateBirth: string;
  phoneNumber: string;
  job: string;
  profilePicture: string;
};
//ADVANCES
export type AdvancesRequest = {
  id: string;
  amount: number;
  date: string;
  status: string;
  description: string;
  approver: string;
  idUser: string;
};
