import dayjs from "dayjs";

export const excelToString = (data: any) => {
  return data!.toString();
};

export const excelToNumber = (data: any) => {
  return !!Number(data) ? Number(data) : null;
};

export const excelToBool = (data: any) => {
  return data.toLowerCase() === "si"
    ? true
    : data.toLowerCase() === "no"
    ? false
    : undefined;
};

export const excelToTime = (data: any) => {
  return typeof data == "number"
    ? data <= 1
      ? excelTimeToJSTime(data)
      : data
    : data;
};

export const excelToDate = (data: any) => {
  return typeof data == "number"
    ? data > 3000
      ? excelDateToJSDate(data)
      : data
    : data;
};

const excelTimeToJSTime = (serial: number) => {
  var utc_days = Math.floor(serial - 25569);
  var utc_value = utc_days * 86400;
  var date_info = new Date(utc_value * 1000);

  var fractional_day = serial - Math.floor(serial) + 0.0000001;

  var total_seconds = Math.floor(86400 * fractional_day);

  var seconds = total_seconds % 60;

  total_seconds -= seconds;

  var hours = Math.floor(total_seconds / (60 * 60));
  var minutes = Math.floor(total_seconds / 60) % 60;

  const date = new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  );

  const datetext = date.toTimeString();
  const timetext = datetext.split(" ")[0];

  return timetext.slice(0, 5);
};

const excelDateToJSDate = (serial: number) => {
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const MISSING_LEAP_YEAR_DAY = SECONDS_IN_DAY * 1000;
  const MAGIC_NUMBER_OF_DAYS = 25567 + 2;
  if (!Number(serial)) {
    console.log("wrong input format");
  }

  const delta = serial - MAGIC_NUMBER_OF_DAYS;
  const parsed = delta * MISSING_LEAP_YEAR_DAY;
  const date = dayjs(new Date(parsed)).add(1, "days").format("YYYY-MM-DD");

  return date;
};
