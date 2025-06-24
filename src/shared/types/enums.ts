export enum LocalStorageKeys {
  TOKEN = "token",
  AUTH_USER = "authUser",
  WORKER = "worker",
  PAYROLL_YEAR_FILTER = "payrollYearFilter",
}

export enum _modules {
  ADMINISTRATOR = "administrator",
  ATTENDANCE = "attendances",
  WORKER = "workers",
  DOCUMENTS = "documents",
  SEASONAL_SCHEDULES = "seasonal-schedules",
  EXTRA_HOURS = "extra-hours",
  COMPENSATION = "compensation",
  LICENSE = "license",
  PAYROLL = "payroll",
  PROJECTS = "projects",
  SUBSIDY = "subsidy",
  VACATION = "vacation",
}

export enum HelperText {
  TEXTFIELD_REQUIRED = "Campo obligatorio",
  DATE_INVALID = "Fecha no válida",
  TIME_INVALID = "Hora inválida",
  FIELD_INVALID = "Campo no válido",
  SELECT_REQUIRED = "Seleccione un opción",
}

export enum TypeExcel {
  CELL_REQUIRED = "Obligatorio",
  CELL_OPTIONAL = "Opcional",
  CELL_TEXT = "Tipo: Texto",
  CELL_BOOL = "Formato: Si/No",
  CELL_NUMBER = "Tipo: Numérico (+)",
  CELL_DATE = "Formato: DD/MM/YYYY, YYYY-MM-DD, DD-MM-YYYY",
  CELL_TIME = "Formato: HH:MM",
  CELL_EMAIL = "Formato: Ej. correo@gmail.com",
}

export enum MessagePopup {
  CREATE_SUCCESS = "Datos guardados con exito.",
  UPDATE_SUCCESS = "Datos editados con exito.",
  UPLOAD_EXCEL_SUCCESS = "Se cargó correctamente el archivo.",
  UPLOAD_EXCEL_ERROR = "Se encontró datos incorrectos en el archivo.",
}

export enum CallMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum UrlRoutes {
  HOME = "home",
  LOGIN = "auth/login",

  USER = "user",
  USER_CREATION = "user/creation",
  USER_LIST = "user/list",

  PROFILE = "profile",

  PERSONAL_INFO_GENERAL = "personal-info/general",
  PERSONAL_INFO_EDUCATION = "personal-info/education",
  PERSONAL_INFO_COURSES = "personal-info/courses",
  PERSONAL_INFO_EXPERIENCES = "personal-info/experiences",
  PERSONAL_INFO_EMERGENCY = "personal-info/emergency",
  PERSONAL_INFO_RELATIVES = "personal-info/relatives",
  PERSONAL_INFO_HOBBIES = "personal-info/hobbies",

  MY_ATTENDANCE = "my-attendance",

  MY_REQUESTS = "my-requests",

  MY_ADVANCES = "my-advances",

  MY_PAYSLIPS = "my-payslips",

  MY_TEAM = "my-team",
  TEAM_REQUESTS = "team/requests",

  JOB = "job",

  WORKER = "worker",
  WORKER_LIST = "worker/list",
  SCHEDULES = "worker/schedules",
  ATTENDANCES = "worker/attendances",
  WORKER_REQUEST = "worker/requests",

  PAYROLL = "payroll",
  SALARY = "payroll/salary",
  ADVANCE = "payroll/advance",
  RCIVA = "payroll/rc-iva",
  RETROACTIVE = "payroll/retroactive",
  BONUS = "payroll/bonus",
  SUBSIDY = "payroll/subsidy",

  COMPENSATION = "compensation",

  PROJECTS = "projects",

  UPLOAD = "upload",

  SEASONAL_SCHEDULES = "seasonal-schedules",

  COMPANY = "company",

  SETTINGS = "settings",

  REPORTS = "reports",

  DOCUMENTS = "documents",

  DASHBOARD = "dashboard",

  ATTENDANCE_WORKER = "attendance-worker",
  ATTENDANCE_WORKER_MARKING = "attendance-worker/marking",
}
