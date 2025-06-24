export const toFixed2 = (number: number) => {
  if (!number) return 0;
  return Math.round(number * 100) / 100;
};
