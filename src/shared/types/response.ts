import { DeviceWorker } from "@/models";
import { TOptions } from "./props";

export type FileResponse = {
  file: string;
};

export type TNavigation = {
  name: string;
  items?: NavigationItems[];
};
type NavigationItems = {
  label: string;
  route: string;
};

export type LocationSelectOptionsResponse = {
  id: string;
  name: string;
  description: string;
  cities: CityResponse[];
};

type CityResponse = {
  id: string;
  name: string;
  description: string;
  code: string;
};

export type HomeResponse = {
  current_vacation_days: number;
  number_vacations: number;
  number_new_users: number;
  number_birthdays: number;
};

export type BirthdaysHomeResponse = {
  id: string;
  name: string;
  job: string;
  date_birth: string;
  profile_picture: string;
};

export type NewUsersHomeResponse = {
  id: string;
  name: string;
  job: string;
  profile_picture: string;
};

export type VacationHomeResponse = {
  dayVacation: VacationHomeDayRequestResponse[];
  hourVacation: VacationHomeHourRequestResponse[];
};
type VacationHomeDayRequestResponse = {
  id: string;
  name: string;
  job: string;
  started_date: string;
  finished_date: string;
  request_days: number;
  profile_picture: string;
};
type VacationHomeHourRequestResponse = {
  id: string;
  name: string;
  job: string;
  date: string;
  started_hour: string;
  finished_hour: string;
  request_days: number;
  profile_picture: string;
};
export type VacationHomeRequestResponse =
  | VacationHomeDayRequestResponse
  | VacationHomeHourRequestResponse;

export type PersonSelectOptionsResponse = {
  genders: TOptionsResponse[];
  genderIdentities: TOptionsResponse[];
  marital_status: TOptionsResponse[];
  degrees: TOptionsResponse[];
  employments: TOptionsResponse[];
  kinships: TOptionsResponse[];
  family: TOptionsResponse[];
  hobbies: TOptionsResponse[];
  document_types: TOptionsResponse[];
};

export type TOptionsResponse = {
  id: string;
  name: string;
  label: string;
};

export type PersonResponse = {
  id: string;
  ci: string;
  complement: string;
  issued: string;
  name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  married_lastname: string;
  profile_picture: string;
  email: string;
  phone_number: string;
  date_birth: string;
  direction: string;
  blood: string;
  status: boolean;
  document_type: TOptions;
  gender: TOptions;
  gender_identity: TOptions;
  marital_status: TOptions;
  live: {
    id: string;
    name: string;
    country: TOptions;
  };
  place_birth: {
    id: string;
    name: string;
    country: TOptions;
  };
  job: {
    id: string;
    name: string;
  };
  reference_person: {
    id: string;
    name: string;
    phone_number: string;
    kinship: string;
  };
  experiences: ExperienceRes[];
  education: EducationRes[];
  courses: CourseRes[];
  hobbies: TOptions[];
  other_hobbies: TOptions[];
  relatives: Relative[];
  allergy: TOptions[];
};
type ExperienceRes = {
  id: string;
  position: string;
  company: string;
  started_date: string;
  finished_date: string;
  description: string;
  employment: string;
  country: string;
  city: string;
};
type EducationRes = {
  id: string;
  name: string;
  entity: string;
  started_date: string;
  finished_date: string;
  description: string;
  country: string;
  city: string;
  degree: string;
};
type CourseRes = {
  id: string;
  name: string;
  institution: string;
  started_date: string;
  finished_date: string;
};
type Relative = {
  id: string;
  name: string;
  lastname: string;
  date_birth: string;
  kinship: string;
};
export type FormsStatusResponse = {
  form: {
    person: boolean;
    education: boolean;
    experience: boolean;
    emergency: boolean;
    relative: boolean;
    hobby: boolean;
    shift: boolean;
    course: boolean;
  };
};
export type EmergencyResponse = {
  blood: string;
  allergy: TOptions[];
  reference_person: {
    id: string;
    name: string;
    phone_number: string;
    kinship: string;
  };
};
export type THobbiesResponse = {
  hobbies: TOptions[];
  other_hobbies: TOptions[];
};

export type TWorkersResponse = {
  users: WorkerResponse[];
  total: number;
};

//tabla worker list
export type WorkerResponse = {
  id: string;
  ci: string;
  complement: string;
  name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  username: string;
  email: string;
  corporate_email: string;
  role: string;
  status: number;
  created_at: string;
  started_date: string;
  form: FormResponse;
};
export type TUsersResponse = {
  users: UserResponse[];
  number_rows: number;
  enabled_users: number;
  disabled_users: number;
};

export type UserResponse = {
  id: string;
  ci: string;
  complement: string;
  name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  username: string;
  email: string;
  corporate_email: string;
  role: string;
  status: boolean;
  created_at: string;
};

type FormResponse = {
  person: number;
  official: number;
  education: number;
  experience: number;
  emergency: number;
  relative: number;
  hobby: number;
  shift: number;
  course: number;
  project: number;
};

// official  backend
export type JobResponse = {
  id: string;
  name: string;
  code: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  corporate_email: string;
  //job
  branch_office: {
    id: string;
    name: string;
    direction: string;
    city: {
      id: string;
      name: string;
    };
  };
  job: {
    id: string;
    name: string;
  };
  work_area: {
    id: string;
    name: string;
  };
  boss: {
    id: string;
    name: string;
    second_name: string;
    first_lastname: string;
    second_lastname: string;
  };
  contract: {
    id: string;
    name: string;
  };
  contract_type: {
    id: string;
    name: string;
  };
  job_clasification: {
    id: string;
    name: string;
  };
  //salary
  base_salary: number;
  other_salary: number;
  cost_center: {
    id: string;
    name: string;
  };
  has_seniority_bond: boolean;
  is_retired: boolean;
  has_border_subsidy: boolean;
  has_dominical_salary: boolean;
  has_fortnight: boolean;
  fortnight_salary: number;
  bank: {
    id: string;
    name: string;
  };
  bank_account: string;
  bank_customer_code: string;
  //insurance
  insurance: {
    id: string;
    name: string;
  };
  insurance_number: string;
  has_disability: boolean;
  is_mentor: boolean;
  afp: {
    id: string;
    name: string;
  };
  afp_account: string;
  has_afp: boolean;
  has_rc_iva: boolean;
  rc_iva: string;
  // retire
  started_date: string;
  finished_date: string;
  reason_retire_ministry: {
    id: string;
    name: string;
    number: number;
  };
  observation: string;
  apply_other_salary: boolean;
};

export type CompanyResponse = {
  id: string;
  country: {
    id: string;
    name: string;
    description: string;
  };
  nit: string;
  name: string;
  business_name: string;
  service: string;
  ministry_labor_number: string;
  health_fund_number: string;
  phone_number: string;
  direction: string;
  logo: string;
  representative: {
    id: string;
    ci: string;
    name: string;
  };
};
export type CompanyRequest = {
  nit: string;
  name: string;
  business_name: string;
  service: string;
  ministry_labor_number: string;
  health_fund_number: string;
  phone_number: string;
  direction: string;
  representative: {
    ci: string;
    name: string;
  };
};
export type CitiesResponse = {
  id: string;
  name: string;
  cities: {
    id: string;
    name: string;
    description: string;
    code: string;
  }[];
};
export type HolidaysResponse = {
  key: string;
  name: string;
  holidays: string[];
  cities: {
    key: string;
    name: string;
    holidays: string[];
  }[];
};

export type SettingsResponse = {
  banks: TOptionsResponse[];
  discount_types: TOptionsResponse[];
  jobs: TOptionsResponse[];
  work_areas: TOptionsResponse[];
  branch_offices: (TOptionsResponse & {
    direction: string;
    number: number;
    city: TOptionsResponse;
  })[];
  licenses: TOptionsResponse[];
  national_salaries: {
    id: string;
    year: number;
    salary: number;
    in_progress: boolean;
  }[];
  cost_centers: TOptionsResponse[];
  advance_type: TOptionsResponse[];
  job_clasifications: TOptionsResponse[];
  bonds: TOptionsResponse[];
  other_payment_types: TOptionsResponse[];
};

export type WorkerSelectOptionsResponse = {
  afps: TOptionsResponse[];
  contracts: TOptionsResponse[];
  contract_types: TOptionsResponse[];
  insurances: TOptionsResponse[];
  reason_retire_ministry: TOptionsResponse[];
  job_clasifications: TOptionsResponse[];
  leaders: {
    id: string;
    name: string;
    second_name: string;
    first_lastname: string;
    second_lastname: string;
  }[];
};

export type ToleranceResponse = {
  tolerance_time_shift_one: number;
  tolerance_time_shift_two: number;
  tolerance_time_shift_three: number;
  block_time_range_shift_one: number;
  block_time_range_shift_two: number;
  block_time_range_shift_three: number;
};

export type PayslipConfigResponse = {
  show_detail_bonds: boolean;
  show_detail_discounts: boolean;
  employer_signature_label: string;
  employer_signature_image?: string;
  worker_signature_label: string;
};

export type WorkerVacationDaysResponse = {
  id: string;
  name: string;
  job: string;
  monday_hours: number;
  tuesday_hours: number;
  wednesday_hours: number;
  thursday_hours: number;
  friday_hours: number;
  saturday_hours: number;
  sunday_hours: number;
};

export type ToleranceShiftsRequest = {
  tolerance_time_shift_one?: number;
  tolerance_time_shift_two?: number;
  tolerance_time_shift_three?: number;
  block_time_range_shift_one?: number;
  block_time_range_shift_two?: number;
  block_time_range_shifthree?: number;
};

export type NationalSalriesResponse = {
  id: string;
  year: number;
  salary: number;
  in_progress: boolean;
};

export type PaymentAccountResponse = {
  code: string;
  id: string;
  is_debit: boolean;
};

export type VacationConfigurationResponse = {
  has_automatic_configuration: boolean;
  has_custom_configuration: boolean;
  allow_request_with_debt: boolean;
  advance_days_for_request: number;
  is_saturday_half_time: boolean;
  vacation_benefit_policy: "oneYear" | "oneYearAndOneDay";
  vacation_benefit_visibility: "respectPolicy" | "dayOne";
  allow_hour_vacation_request: boolean;
  allow_vacation_proration: boolean;
  histories: {
    id: string;
    started_date: string;
    finished_date: string;
    vacation_list: {
      year: number;
      vacation_days: number;
    }[];
  }[];
};

export type TVacationReqRequest = {
  advance_days_for_request?: number;
  allow_request_with_debt?: boolean;
  allow_hour_vacation_request?: boolean;
  is_saturday_half_time?: boolean;
  allow_vacation_proration?: boolean;
  vacation_benefit_policy?: string;
  vacation_benefit_visibility?: string;
};

export type TVacationApplicationRequest = {
  has_automatic_configuration?: boolean;
  has_custom_configuration?: boolean;
  started_date?: string;
  finished_date?: string;
  vacation_list?: {
    year: number;
    vacation_days: number;
  }[];
};

export type TVacationGeneralRequest = {
  has_automatic_configuration?: boolean;
  has_custom_configuration?: boolean;
};

export type DayInfoRes = {
  day_mark?: string;
  entry?: string;
  entry_in?: string;
  entry_out?: string;
  id?: string;
  type?: string;
  type_shift: string;
  workday?: string;
};

export type ShiftRes = {
  shifts: DayInfoRes[];
  type: "diurno" | "nocturno" | "";
};

export type FixedSchedulesResponse = {
  id: string;
  name: string;
  second_name?: string;
  first_lastname?: string;
  second_lastname?: string;
  job?: string;
  status: boolean;
  days: {
    monday: ShiftRes;
    tuesday: ShiftRes;
    wednesday: ShiftRes;
    thursday: ShiftRes;
    friday: ShiftRes;
    saturday: ShiftRes;
    sunday: ShiftRes;
  };
  type?: "diurno" | "nocturno" | "hibrido";
  // is_active_default_schedule: boolean;
};

export type WorkersSchedulesResponse = {
  number_rows: number;
  users: {
    id: string;
    name: string;
    status: boolean;
    branch_office: string;
    has_default_schedule: boolean;
    days: {
      monday: ShiftScheduleResponse;
      tuesday: ShiftScheduleResponse;
      wednesday: ShiftScheduleResponse;
      thursday: ShiftScheduleResponse;
      friday: ShiftScheduleResponse;
      saturday: ShiftScheduleResponse;
      sunday: ShiftScheduleResponse;
    };
  }[];
};

type ShiftScheduleResponse = {
  type: "" | "diurno" | "nocturno";
  shifts: {
    entry_in: string;
    entry_out: string;
    type_shift: string;
  }[];
};

export type SeasonalSchedulesResponse = {
  id: string;
  name: string;
  work_group: {
    id: string;
    name: string;
  };
  schedule_groups: {
    id: string;
    started_date: string;
    finished_date: string;
    status: string;
    detail: {
      key: string;
      date: string;
      status: string;
      detail: DayInfoRes[];
    }[];
  }[];
};

export type DayMarkingResponse = {
  shifts: {
    marked: boolean;
    type_shift: string;
    type: string;
  }[];
};

export type attendanceDayResponse = {
  id: string;
  workday: string;
  day_mark: string;
  date: string;
  entry: string;
  marked_time: string;
  late: number;
  type: string;
  type_shift: string;
};

type AttendancePointResponse = {
  id: string;
  name: string;
  direction: string;
  latitude: string;
  longitude: string;
};
export type AttendanceMarkPointsResponse = {
  attendance_points: AttendancePointResponse[];
  marking_method: string;
  has_fingerprint_marking: boolean;
};

export type DeviceWorkerResponse = DeviceWorker;

export type PayrollConceptResponse = {
  id: string;
  code: string;
  assignment_text: string;
  assignment_text_with_code: boolean;
  position_text_with_code: boolean;
  index: number;
  account_type: {
    id: string;
    code: string;
    is_debit: boolean;
  };
  detail: [
    {
      id: string;
      name: string;
    },
    {
      id: string;
      name: string;
    },
    {
      id: string;
      name: string;
    }
  ];
};
//BONUS
export type BonusResponse = {
  calculation_type: string;
  require_full_month_for_calculation: boolean;
};
export type BonusRequest = {
  calculation_type?: string;
  require_full_month_for_calculation?: boolean;
};

//CALCULATION RULES
export type CalculationRulesResponse = {
  seniority_calculation_type: string;
  applied_days_for_calculation: string;
};
export type CalculationRulesRequest = {
  seniority_calculation_type?: string;
  applied_days_for_calculation?: string;
};
