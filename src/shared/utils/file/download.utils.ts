import * as ExcelJS from "exceljs";
import { jsonValuesToArray } from "./excel.utils";

const Letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "AA",
  "AB",
  "AC",
  "AD",
  "AE",
  "AF",
  "AG",
  "AH",
  "AI",
  "AJ",
  "AK",
  "AL",
  "AM",
  "AN",
  "AO",
  "AP",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AV",
  "AW",
  "AX",
  "AY",
  "AZ",
];

export const downloadFileBase64 = (fName: string, base64: string) => {
  const extension = base64FileHeaderMapper(base64);
  const downloadLink = document.createElement("a");
  let linkSource = "";

  if (extension === "jpg") {
    linkSource = "data:image/jpg;base64;base64,";
  }
  if (extension === "png") {
    linkSource = "data:image/png;base64;base64,";
  }
  if (extension === "xlsx" || extension === "csv") {
    linkSource =
      "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
  }
  if (extension === "pdf") {
    linkSource = "data:application/pdf;base64,";
  }

  linkSource = `data:image/png;base64;base64,${base64}`;
  const fileName = fName + "." + extension;

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

function base64FileHeaderMapper(fileBase64: string) {
  const fileHeader = new Map();

  fileHeader.set("/9j", "jpg");
  fileHeader.set("iVB", "png");
  fileHeader.set("Qk0", "bmp");
  fileHeader.set("SUk", "tiff");

  fileHeader.set("JVB", "pdf");
  fileHeader.set("UEs", "xlsx");
  fileHeader.set("Tix", "csv");
  fileHeader.set("TnJ", "csv");
  fileHeader.set("TsK", "csv");
  fileHeader.set("TlJ", "csv");
  fileHeader.set("Tnx", "txt");

  const header = fileBase64.slice(0, 3);
  if (fileHeader.has(header)) {
    return fileHeader.get(header);
  }
  const decoded = atob(fileBase64);
  const hasCommonDelimiters = /[,;\t]/.test(decoded);
  const hasMultipleLines = /[\r\n]/.test(decoded);

  if (hasCommonDelimiters && hasMultipleLines) {
    return "csv";
  }

  return "unknown file";
}

export const getFileNameWithoutExtension = (fileName: string) => {
  const fileNameArray = fileName.split(".");
  fileNameArray.pop();
  const newFileName = fileNameArray.join(".").replace(".", "_");
  return newFileName;
};

export const getErrorFileName = (fileName: string) => {
  return getFileNameWithoutExtension(fileName) + "_Errores";
};

const generatesRows = (
  Rows: string[][],
  Cols: string[],
  sheet: ExcelJS.Worksheet,

  isFormat: boolean = false,

  HighCols: string[] | null = null,
  subCols: string[] | null = null
) => {
  for (let r = 0; r <= Rows.length; r++) {
    for (let c = 0; c < Cols.length; c++) {
      let cell = sheet.getCell(Letters[c] + (r + 1));
      if (!HighCols) {
        if (r + 1 === 1) {
          cell.value = Cols[c];
          cell.alignment = { vertical: "top", wrapText: true };
          cell.font = {
            bold: true,
          };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: {
              argb: Cols[c] === "Errores" ? "FFF75B5B" : "D9D9D9",
            },
            bgColor: {
              argb: Cols[c] === "Errores" ? "FFF75B5B" : "D9D9D9",
            },
          };
        } else {
          if (r < Rows.length) {
            cell.value = Rows[r][c];
            if (isFormat) cell.alignment = { vertical: "top", wrapText: true };
          }
        }
      } else if (subCols) {
        if (r + 1 === 1 || r + 1 === 2) {
          const value = r + 1 === 2 ? subCols[c] : Cols[c];
          const factor =
            value.split("$*").length > 1 ? value.split("$*")[1] : null;
          if (factor) {
            sheet.mergeCells(`${Letters[c]}1:${Letters[c + +factor]}1`);
          }

          if (Cols[c] === " " && r + 1 === 1) {
            sheet.mergeCells(`${Letters[c] + (r + 1)}:${Letters[c] + (r + 2)}`);
          }

          if (value !== " " && value !== "*") {
            cell.value = value.split("$*")[0];
            cell.border = {
              top: { style: "thin", color: { argb: "000" } },
              left: { style: "thin", color: { argb: "000" } },
              bottom: { style: "thin", color: { argb: "000" } },
              right: { style: "thin", color: { argb: "000" } },
            };
            cell.alignment = {
              vertical: "middle",
              horizontal: "center",
              wrapText: true,
            };
          }

          cell.font = {
            bold: true,
          };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: {
              argb: subCols[c] === "Errores" ? "FFF75B5B" : "D9D9D9",
            },
            bgColor: {
              argb: subCols[c] === "Errores" ? "FFF75B5B" : "D9D9D9",
            },
          };
        } else {
          if (r < Rows.length) {
            cell.value = Rows[r][c];
            if (isFormat) cell.alignment = { vertical: "top", wrapText: true };
          }
        }
      }
    }
  }
};

export const buildExcel = (
  ColsData: string[],
  RawRows: string[][],
  fileName: string,

  isFormat: boolean = false, // breakline => cell content

  HighCols: string[] | null = null,

  Cols1: string[] | null = null, // Sheet2
  Rows1: string[][] | null = null // Sheet2
) => {
  const RowsData = [[], ...RawRows];

  const workbook = new ExcelJS.Workbook();
  const sheet1 = workbook.addWorksheet("Hoja 1");
  sheet1.properties.defaultColWidth = 25.3;
  sheet1.pageSetup.fitToPage = true;

  let Cols: string[],
    subCols: string[] | null = null;

  if (!HighCols) {
    Cols = ColsData;
  } else {
    Cols = HighCols;
    subCols = ColsData;
    RowsData.unshift([]);
  }

  generatesRows(RowsData, Cols, sheet1, isFormat, HighCols, subCols);

  for (let c = 0; c < Cols.length; c++) {
    let col = sheet1.getColumn(Letters[c]);
    col.width = Cols[c]
      ? Cols[c].toString().length < 14
        ? 22
        : Cols[c].toString().length < 16
        ? Cols[c].toString().length + 2
        : 22
      : 0;
  }

  let sheet2;
  if (Rows1 && Cols1) {
    sheet2 = workbook.addWorksheet("Opciones");
    sheet2.properties.defaultColWidth = 35;
    generatesRows([[], ...Rows1], Cols1, sheet2, isFormat, HighCols, subCols);
  }

  workbook.xlsx.writeBuffer().then((data) => {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  });
};

export const downloadExcelFromErrorData = (
  RowsData: string[],
  header: string[],
  fileName: string,

  HighCols: string[] | null = null
) => {
  let Rows;
  Rows = RowsData.map((obj: any) => {
    return jsonValuesToArray(obj, header);
  });

  var errorsFileName = getErrorFileName(fileName); // _Errores

  buildExcel(
    header,
    Rows,
    errorsFileName,

    false, // isFormat

    HighCols
  );
};
