export const getPaginationQuery = (
  from: number | undefined,
  to: number | undefined
): { from: string; to: string } => {
  return {
    from: from === 0 ? "1" : from ? from.toString() : "",
    to: to ? to.toString() : "",
  };
};

export const getNumberOfPages = (total: number, pageLimit: number): number => {
  const val = total / pageLimit;
  const valRounded = Math.round(val);
  return val ? (val % 1 > 0 ? valRounded + 1 : valRounded) : 1;
};
