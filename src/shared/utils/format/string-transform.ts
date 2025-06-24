import { ScheduleAttendanceDay } from "@/modules/attendance/modules/my-attendance/types";
import { regFirstLetterOfEachWord, regNoAccents } from "./reg-exp";
import { TVariant } from "@/types";

export const wordsSpacer = (...args: (string | undefined)[]) => {
  const array = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] && args[i] !== "") {
      array.push(args[i]);
    }
  }

  return array.join(" ");
};

export const joinWithSeparator = (
  separator: string,
  ...args: (string | null | undefined)[]
): string => {
  const array = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] && args[i] !== "") {
      array.push(args[i]);
    }
  }

  return array.join(separator);
};

export const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(regNoAccents(), "$1").normalize();
};

export const capitalizeAllFirstLetter = (str?: string) => {
  if (!str) return "";

  return str.replace(regFirstLetterOfEachWord(), (letter) =>
    letter.toUpperCase()
  );
};

export const capitalizeFirstLetter = (str?: string) => {
  if (!str) return "";

  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

export const spanishDays = (day: string | undefined) => {
  if (!day) return "";

  const str = day.toLocaleLowerCase();
  switch (str) {
    case "monday":
      return "Lunes";
    case "tuesday":
      return "Martes";
    case "wednesday":
      return "Miércoles";
    case "thursday":
      return "Jueves";
    case "friday":
      return "Viernes";
    case "saturday":
      return "Sábado";
    case "sunday":
      return "Domingo";
    default:
      return "";
  }
};
export const removeSeconds = (time: string | undefined): string => {
  if (!time) return "";

  return time.split(":").slice(0, 2).join(":");
};

export const translateMonthToSpanish = (month: string): string => {
  const months: Record<string, string> = {
    January: "Enero",
    February: "Febrero",
    March: "Marzo",
    April: "Abril",
    May: "Mayo",
    June: "Junio",
    July: "Julio",
    August: "Agosto",
    September: "Septiembre",
    October: "Octubre",
    November: "Noviembre",
    December: "Diciembre",
  };

  return months[month] || month;
};

export const formatProjectStatus = (status: string): string => {
  const statusMap: Record<string, string> = {
    "en ejecucion": "En ejecución",
    finalizado: "Finalizado",
  };

  return statusMap[status.toLowerCase()] || status;
};

export const getSchedulesMode = (
  currentAttendanceWeek: ScheduleAttendanceDay[] | null
) => {
  const filledSchedules = currentAttendanceWeek?.filter((obj) => obj.shift1);

  return filledSchedules?.every((obj) => obj.mode === "day")
    ? "day"
    : filledSchedules?.every((obj) => obj.mode === "night")
    ? "night"
    : filledSchedules && filledSchedules.length > 0
    ? "hybrid"
    : "";
};

export const reduceVariant = (str: TVariant) => {
  return str === "h1"
    ? "h2"
    : str === "h2"
    ? "h3"
    : str === "h3"
    ? "h4"
    : str === "h4"
    ? "h5"
    : str === "h5"
    ? "subtitle1"
    : str === "subtitle1"
    ? "subtitle2"
    : str === "subtitle2"
    ? "body1"
    : str === "body1"
    ? "body2"
    : str === "body2"
    ? "body3"
    : "body3";
};
