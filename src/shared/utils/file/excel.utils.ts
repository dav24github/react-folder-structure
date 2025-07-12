import { MessagePopup } from "@/types";
import { removeEmptyOrUndifined } from "./array-transform";
import { isValidDate, isValidExcelDate } from "./date-transform";
import { downloadExcelFromErrorData } from "./download.utils";
import { regExpEmail, regExpTime } from "./reg-exp";
import { removeAccents } from "./string-transform";
import * as XLSX from "xlsx";
import dayjs from "dayjs";

export const extractDataFromExcel = (
  evt: ProgressEvent<FileReader>,
  HighCols = false
) => {
  /* Parse data */
  const bstr = evt.target!.result;
  const wb = XLSX.read(bstr, { type: "binary" });
  /* Get first worksheet */
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  /* Convert array of arrays */

  let excelDataRaw;
  let columnsArray: any[] = [];

  if (!HighCols) {
    excelDataRaw = XLSX.utils.sheet_to_json(ws, {
      header: 5,
      defval: "",
    });
    columnsArray = XLSX.utils.sheet_to_json(ws, {
      header: 1,
    })[0] as string[];
  } else {
    const excelDataOrigin: any[] = XLSX.utils.sheet_to_json(ws, {
      header: 1,
      defval: "",
    });

    excelDataRaw = [];
    const keys = excelDataOrigin[0].map((a: any, i: any) =>
      excelDataOrigin[1][i] === "" ? a : excelDataOrigin[1][i]
    );
    const rows = excelDataOrigin.slice(2, excelDataOrigin.length);
    for (let i = 0; i < rows.length; i++) {
      const row: any = {};
      for (let j = 0; j < keys.length; j++) {
        row[keys[j]] = rows[i][j];
      }
      excelDataRaw.push(row);
    }
  }

  excelDataRaw = excelDataRaw.map((obj) => {
    const ob = { ...obj };
    delete ob["Errores"];

    return ob;
  });

  const excelData = excelDataRaw.map((obj: any) => {
    const ob: any = {};
    for (const key in obj) {
      if (!key.includes("__EMPTY")) {
        ob[key] = typeof obj[key] === "string" ? obj[key].trim() : obj[key];
      }
    }
    return ob;
  });

  const cleanedExcelData = excelData.filter((value: any) => {
    let isAllEmpty = true;
    for (const key in value) {
      if (value[key]) {
        isAllEmpty = false;
      }
    }
    return JSON.stringify(value) !== "{}" && !isAllEmpty;
  });

  if (HighCols) {
    columnsArray = Object.keys(cleanedExcelData[0]);
  }
  const columnsData = columnsArray?.filter((obj) => obj && obj !== "Errores");

  return { excelData: cleanedExcelData, header: columnsData };
};

// FORMAT
export const generalFormatExcelData = (rowData: any) => {
  const obj = {
    ci: rowData["Documento de identidad"],
    complement: rowData["Complemento"],
    name: rowData["Nombre"],
  };
  const row = deleteBasicKeys(obj);

  // OPTIONAL
  if (row.complement == undefined) delete row.complement;

  return row;
};

const ciComplementoFormat = (data: any) => {
  return data.map((obj: any) => {
    const complemento =
      obj["Complemento"] == undefined ? "" : obj["Complemento"];

    return {
      ...obj,
      ciComplemento: obj["Documento de identidad"] + complemento,
    };
  });
};

export const deleteBasicKeys = (obj: any) => {
  const data = { ...obj };
  delete data["Documento de identidad"];
  delete data["Complemento"];

  // **
  delete data["Nombre"];
  // --

  delete data["Errores"];
  return data;
};

export const jsonValuesToArray = (data: any, cols: string[]) => {
  const keysData = Object.keys(data);
  const rows = [];
  for (let index = 0; index < cols.length; index++) {
    if (keysData.includes(cols[index])) {
      if (isValidDate(data[cols[index]])) {
        rows.push(dayjs(data[cols[index]]).format("DD/MM/YYYY"));
      } else {
        rows.push(data[cols[index]]);
      }
    } else {
      rows.push("");
    }
  }

  return rows;
};
// **********************************

// VALIDATION
export const hasNoDuplicateDocId = (arg: any) => {
  const data: any[] = ciComplementoFormat(arg);

  var object: any = {};
  var duplicateRows = [];
  data.forEach((item, index) => {
    if (item["Documento de identidad"]) {
      if (!object[item["ciComplemento"]]) object[item["ciComplemento"]] = [];

      object[item["ciComplemento"]].push(index);
    }
  });
  for (var prop in object) {
    if (object[prop].length >= 2) {
      duplicateRows.push(
        object[prop].map((i: number) => ({
          index: i,
          field: "Doc. Identidad + Complemento",
        }))
      );
    }
  }

  const duplicateErrors = duplicateRows.flat(1);

  return duplicateErrors.length !== 0 ? duplicateErrors : null;
};

export const hasValidKeys = (data: any, validCols: string[]) => {
  const columnsData: string[] = [
    ...new Set(
      data
        .map((obj: any) => {
          return Object.keys(obj);
        })
        .flat(1) as string[]
    ),
  ];

  let validKeyErrors = [];
  for (let index = 0; index < columnsData.length; index++) {
    if (!validCols.includes(columnsData[index])) {
      validKeyErrors.push("“" + columnsData[index] + "”");
    }
  }

  return validKeyErrors.length !== 0 ? validKeyErrors : null;
};

export const hasRequiredKeys = (data: any, requiredCols: any[]) => {
  let requiredKeyErrors = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < requiredCols.length; j++) {
      if (!requiredCols[j].optional1 && !requiredCols[j].dependent1) {
        if (!data[i][requiredCols[j]] && data[i][requiredCols[j]] !== 0) {
          requiredKeyErrors.push({
            index: i,
            field: requiredCols[j],
          });
        }
      } else if (requiredCols[j].dependent1) {
        if (
          data[i][requiredCols[j].dependent1] &&
          !data[i][requiredCols[j].dependent2] &&
          data[i][requiredCols[j].dependent1] !== 0
        ) {
          requiredKeyErrors.push({
            index: i,
            field: `${requiredCols[j].dependent2}`,
          });
        }
        if (
          !data[i][requiredCols[j].dependent1] &&
          data[i][requiredCols[j].dependent2] &&
          data[i][requiredCols[j].dependent2] !== 0
        ) {
          requiredKeyErrors.push({
            index: i,
            field: `${requiredCols[j].dependent1}`,
          });
        }
      } else {
        if (
          !data[i][requiredCols[j].optional1] &&
          !data[i][requiredCols[j].optional2] &&
          data[i][requiredCols[j].optional1] !== 0 &&
          data[i][requiredCols[j].optional2] !== 0
        ) {
          requiredKeyErrors.push({
            index: i,
            field: `${requiredCols[j].optional1} o ${requiredCols[j].optional2}`,
          });
        }
      }
    }
  }

  return requiredKeyErrors.length !== 0 ? requiredKeyErrors : null;
};

export const hasValidNumbers = (data: any, cols: string[]) => {
  let errorNumbers = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (
        data[i][cols[j]] != undefined &&
        data[i][cols[j]] !== "" &&
        !Number(data[i][cols[j]]) &&
        data[i][cols[j]] !== 0
      ) {
        errorNumbers.push({
          index: i,
          field: cols[j],
        });
      }
    }
  }

  return errorNumbers.length !== 0 ? errorNumbers : null;
};

export const hasAtLeastOneAdicionalKey = (data: any, field: string) => {
  let errorAdditionalKeys: any = [];
  data.map((obj: any, index: number) => {
    const ob = { ...obj };
    delete ob["Documento de identidad"];
    delete ob["Complemento"];
    delete ob["Nombre"];

    if (Object.keys(removeEmptyOrUndifined(ob)).length <= 0) {
      errorAdditionalKeys.push({
        index: index,
        field: field,
      });
    }
  });

  return errorAdditionalKeys.length !== 0 ? errorAdditionalKeys : null;
};

export const hasValidDates = (data: any, cols: string[]) => {
  let dateErrors = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (data[i][cols[j]] != undefined && data[i][cols[j]] !== "") {
        if (!isValidExcelDate(data[i][cols[j]])) {
          dateErrors.push({
            index: i,
            field: cols[j],
          });
        }
      }
    }
  }

  return dateErrors.length !== 0 ? dateErrors : null;
};

export const hasValidTimes = (data: any, cols: string[]) => {
  let timeErrors = [];
  for (let i = 0; i < data.length; i++) {
    var validRegex = regExpTime();
    for (let j = 0; j < cols.length; j++) {
      if (
        data[i][cols[j]] &&
        data[i][cols[j]] != undefined &&
        data[i][cols[j]] !== "" &&
        !data[i][cols[j]].match(validRegex)
      ) {
        timeErrors.push({
          index: i,
          field: cols[j],
        });
      }
    }
  }

  return timeErrors.length !== 0 ? timeErrors : null;
};

export const hasNoAccents = (data: any, cols: string[]) => {
  let noAccentErrors = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (data[i][cols[j]] != undefined && data[i][cols[j]] !== "") {
        let normalize = removeAccents(data[i][cols[j]]);
        if (normalize !== data[i][cols[j]]) {
          noAccentErrors.push({
            index: i,
            field: cols[j],
          });
        }
      }
    }
  }

  return noAccentErrors.length !== 0 ? noAccentErrors : null;
};

export const hasValidEmail = (data: any, cols: string[]) => {
  let emailErrors = [];
  for (let i = 0; i < data.length; i++) {
    var validRegex = regExpEmail();
    for (let j = 0; j < cols.length; j++) {
      if (
        data[i][cols[j]] &&
        data[i][cols[j]] != undefined &&
        data[i][cols[j]] !== "" &&
        !data[i][cols[j]].match(validRegex)
      ) {
        emailErrors.push({
          index: i,
          field: cols[j],
        });
      }
    }
  }

  return emailErrors.length !== 0 ? emailErrors : null;
};

// **********************************

const getDataWithErrors = (
  excelData: any,
  errorsData: { index: number; field: string }[],
  msg: string
) => {
  if (!errorsData) return null;

  // Format ErrorsData
  const errors: {
    indexRow: number;
    msg: string;
  }[] = [];
  for (let i = 0; i < errorsData.length; i++) {
    errors.push({
      indexRow: errorsData[i].index,
      msg: "¡" + errorsData[i].field + " " + msg + "!",
    });
  }

  // Group errors By Row into "Errores" key
  const result: {
    indexRow: number;
    Errores: string;
  }[] = excelData.map((_: any, i: number) => {
    const row = errors.find((ob) => ob.indexRow === i)!;
    const allErrorsRow = errors
      .filter((ob) => ob.indexRow === i)
      .map((ob) => ob.msg);
    return {
      indexRow: row?.indexRow,
      Errores: allErrorsRow.length > 0 ? allErrorsRow.join(" | ") : "",
    };
  });

  return result;
};

// **********************************

export const throwExcelWithErrors = (data: {
  excelData?: any;
  header?: any;
  HighCols?: any;
  validKeyErrors?: any;
  requiredKeyErrors?: any;
  dateErrors?: any;
  noAccentErrors?: any;
  noDuplicateDocIdErrors?: any;
  emailErrors?: any;
  numberErrors?: any;
  timeErrors?: any;
  additionalKeysErrors?: any;
  fileName?: any;
}) => {
  const {
    excelData,
    header,
    HighCols,

    validKeyErrors,
    requiredKeyErrors,
    dateErrors,
    noAccentErrors,
    noDuplicateDocIdErrors,
    emailErrors,
    numberErrors,
    timeErrors,
    additionalKeysErrors,

    fileName,
  } = data;

  // **************** Valid KEYS *****************
  if (validKeyErrors) {
    return validKeyErrors.length === 1
      ? "El formato es incorrecto. La columna: " +
          validKeyErrors +
          " no es válida."
      : "El formato es incorrecto. Las columnas: " +
          validKeyErrors.join(", ") +
          " no son válidas.";
  }
  // *********************************************

  const requiredKeyErrorsData = getDataWithErrors(
    excelData,
    requiredKeyErrors,
    "vacio"
  );
  const emailErrorsData = getDataWithErrors(
    excelData,
    emailErrors,
    "no válido"
  );
  const dateErrorsData = getDataWithErrors(excelData, dateErrors, "no válido");
  const timeErrorsData = getDataWithErrors(excelData, timeErrors, "no válido");
  const noAccentErrorsData = getDataWithErrors(
    excelData,
    noAccentErrors,
    "con tilde"
  );
  const numbersErrorsData = getDataWithErrors(
    excelData,
    numberErrors,
    "no válido"
  );
  const noDuplicateDocIdErrorsData = getDataWithErrors(
    excelData,
    noDuplicateDocIdErrors,
    "duplicado"
  );
  const additionalKeysErrorsData = getDataWithErrors(
    excelData,
    additionalKeysErrors,
    "faltantes"
  );

  const errorsArray = [
    requiredKeyErrorsData ?? [],
    emailErrorsData ?? [],
    dateErrorsData ?? [],
    noAccentErrorsData ?? [],
    numbersErrorsData ?? [],
    noDuplicateDocIdErrorsData ?? [],
    timeErrorsData ?? [],
    additionalKeysErrorsData ?? [],
  ].flat(1);

  const excelDataWithErrores: string[] = [];
  excelData.forEach((row: any, index: number) => {
    const errorsRow = errorsArray
      .filter((obj) => obj.indexRow === index)
      .map((obj) => obj.Errores);

    excelDataWithErrores.push({ ...row, Errores: errorsRow.join("  ||  ") });
  });
  const HighColsWithErrores = HighCols ? [...HighCols, " "] : undefined;

  downloadExcelFromErrorData(
    excelDataWithErrores,
    [...header, "Errores"],
    fileName,

    HighColsWithErrores
  );

  return MessagePopup.UPLOAD_EXCEL_ERROR;
};
