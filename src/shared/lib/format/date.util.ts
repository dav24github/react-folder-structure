export const indeterminateToformatYYYYMMDD = (date: string): string => {
  let dateYYYYMMDD = null;
  if (date.split("-").length === 3 && +date.split("-")[0] > 1000) {
    dateYYYYMMDD = [
      date.split("-")[0],
      date.split("-")[1],
      date.split("-")[2],
    ].join("-");
    // YYYY-MM-DD
  }
  if (date.split("/").length === 3) {
    // DD/MM/YYYY
    dateYYYYMMDD = [
      date.split("/")[2],
      date.split("/")[1],
      date.split("/")[0],
    ].join("-");
  }
  if (date.split("-").length === 3 && +date.split("-")[0] < 32) {
    // DD-MM-YYYY
    dateYYYYMMDD = [
      date.split("-")[2],
      date.split("-")[1],
      date.split("-")[0],
    ].join("-");
  }

  return dateYYYYMMDD ?? "";
};
