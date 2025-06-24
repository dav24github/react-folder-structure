export const regExpG = (pathname: string): RegExp => {
  return new RegExp(pathname.toLowerCase(), "g");
};

export const regExpUpperCase = (): RegExp => {
  return /[A-Z]/;
};

export const regExpNumber = (): RegExp => {
  return /[0-9]/;
};

export const regNoAccents = (): RegExp => {
  return /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi;
};

export const regFirstLetterOfEachWord = (): RegExp => {
  return /(^\w{1})|(\s+\w{1})/g;
};

export const regExpEmail = (): RegExp => {
  return new RegExp(
    `([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])`
  );
};

export const regExpTime = (): RegExp => {
  return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
};
