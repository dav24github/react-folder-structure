export const calculateJwTExpiration = (expIn: number) => {
  const now = getJwtNowTime();

  if (expIn < now) {
    return true;
  } else {
    return false;
  }
};

export const getJwtNowTime = () => {
  return new Date().getTime() / 1000;
};
