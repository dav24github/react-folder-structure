import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { spanishDays, translateMonthToSpanish } from "./string-transform";
import {
  daysMapping,
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  monthsES,
  monthsMapping,
} from "@/constants";
dayjs.extend(customParseFormat);

export const formatYYYYMMDD = (date: Dayjs | string): string => {
  if (!date) return "";
  return typeof date === "string"
    ? dayjs(date).format("YYYY-MM-DD")
    : date.format("YYYY-MM-DD");
};

export const formatDDMMYYYY = (
  date: Dayjs | string | undefined,
  separator?: string
): string => {
  if (!date || date === "---") {
    return date ?? "";
  }

  if (typeof date === "string") {
    const dateParts = date.toString().split("-");
    if (dateParts.length !== 3) return "";

    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2].slice(0, 2);

    return separator
      ? `${day}${separator}${month}${separator}${year}`
      : `${day}/${month}/${year}`;
  } else {
    return separator
      ? dayjs(date).format(`DD${separator}MM${separator}YYYY`)
      : dayjs(date).format("DD/MM/YYYY");
  }
};

export const formatLiteralMMYYYYDate = (date?: string): string => {
  if (!date || date === "---") return date ?? "";

  const [year, month] = date.split("-");
  const fixedDate = new Date(Number(year), Number(month) - 1);

  const formatted = fixedDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

export const formatFullLiteralDate = (
  data: Dayjs | string | undefined
): string => {
  const dateString =
    typeof data !== "string" ? dayjs(data).format("YYYY-MM-DD") : data;
  if (!dateString) return "";
  const dateParts = dateString.split("-");
  const year = dateParts[0];
  const day = dateParts[2].slice(0, 2);

  const date = new Date(
    new Date(dateString).getTime() -
      new Date(dateString).getTimezoneOffset() * -60000
  );
  const monthLiteral = date.toLocaleString("es-ES", { month: "long" });

  return `${day} de ${monthLiteral} de ${year}`;
};

export const formatMidLiteralDate = (
  dateString: string | undefined
): string => {
  if (!dateString || dayjs(dateString).format("YYYY-MM-DD") === "Invalid Date")
    return "";
  const dateParts = dateString.split("-");
  const year = dateParts[0];
  const day = dateParts[2].slice(0, 2);

  const date = new Date(
    new Date(dateString).getTime() -
      new Date(dateString).getTimezoneOffset() * -60000
  );
  const monthLiteral = date.toLocaleString("es-ES", { month: "short" });

  return `${day} ${monthLiteral} ${year}`;
};

export const getLiteralMonth = (month: string | number | undefined): string => {
  if (!month) return "";

  return monthsES[+month - 1];
};

export const dateToMonth = (date: string | Dayjs): string => {
  const dateStr = typeof date === "string" ? date : formatYYYYMMDD(date);
  return dateStr.split("-")[1];
};

export const dateToLiteralMonth = (date: string | Dayjs): string => {
  const dateStr = typeof date === "string" ? date : formatYYYYMMDD(date);
  return getLiteralMonth(dateStr.split("-")[1]);
};

export const dateToLiteralDay = (date: string | Dayjs | undefined): string => {
  if (!date) return "";
  const dateJs = typeof date === "string" ? dayjs(date) : date;
  return daysMapping[dateJs.format("dddd")];
};

export const dateToYear = (date: string | Dayjs | undefined): string => {
  if (!date) return "";
  const dateStr = typeof date === "string" ? date : formatYYYYMMDD(date);
  return dateStr.split("-")[0];
};

export const dateToHHmmss = (date: string | Dayjs): string => {
  return typeof date === "string" ? date : dayjs(date).format("HH:mm:ss");
};

export const getNumberMonth = (month: string): number => {
  return (
    monthsES.findIndex((obj) => obj.toLowerCase() === month.toLowerCase()) + 1
  );
};

export const getDayJsFromTime = (time: string): Dayjs => {
  if (!time) return dayjs().locale("es");

  return dayjs()
    .locale("es")
    .set("hour", +time.split(":")[0])
    .set("minute", +time.split(":")[1])
    .set("second", 0)
    .set("millisecond", 0);
};

export const getDayMonth = (
  dateString: string | undefined,
  type: "short" | "normal" = "normal"
): string => {
  if (!dateString) return "";

  const dateParts = dateString.split("-");
  const day = dateParts[2];
  const month = getLiteralMonth(dateParts[1]);

  return `${day} ${(type === "normal"
    ? month
    : month.slice(0, 3)
  ).toLocaleLowerCase()}`;
};

export const generateDateFromMonth = (
  monthName: string,
  year: number
): string => {
  const monthInSpanish = translateMonthToSpanish(monthName);
  const monthNumber = monthsMapping[monthInSpanish];
  if (!monthNumber) {
    throw new Error(`Mes no válido: ${monthName}`);
  }
  const date = `${year}-${monthNumber}-01`;
  return date;
};

export const isValidExcelDate = (data: any) => {
  const result = dayjs(indeterminateToformatYYYYMMDD(data), "YYYY-MM-DD", true);

  return result ? result.isValid() : null;
};

export const formatDayMonthLiteral = (dateString: string): string => {
  if (!dateString) return "";

  const date = dayjs(dateString);
  const dayOfWeek = date.format("dddd");
  const dayOfMonth = date.format("D");
  const month = date.format("MMMM");
  const dateFormat = ` ${spanishDays(
    dayOfWeek
  )}, ${dayOfMonth} ${translateMonthToSpanish(month)} `;
  return dateFormat;
};

export const getDatePickerErrorMsg = (error: string | null): string | null => {
  switch (error) {
    case "minDate":
      return "Fecha no válida";
    case "maxDate":
      return "Fecha no válida";
    case "disableFuture":
      return "Fecha fuera límite";
    case "disablePast":
      return "Fecha fuera límite";
    case null:
      return null;
    default:
      return "Fecha no válida";
  }
};

export const getTimePickerErrorMsg = (error: string | null): string | null => {
  switch (error) {
    case "invalidDate":
      return "Hora inválida";
    case "Invalid Date":
      return "Hora inválida";
    case null:
      return null;
    default:
      return "Hora inválida";
  }
};

export const isValidDate = (date: string | Dayjs): boolean => {
  if (
    typeof date === "number" ||
    dayjs(date).format("YYYY-MM-DD") == "Invalid Date" ||
    dayjs(date).isBefore(DEFAULT_MIN_DATE) ||
    dayjs(date).isAfter(DEFAULT_MAX_DATE)
  ) {
    return false;
  } else {
    return true;
  }
};
