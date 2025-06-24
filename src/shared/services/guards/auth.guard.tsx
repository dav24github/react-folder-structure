import { Logout } from "@/components";
import { useAuth } from "@/hooks";
import { IRootState } from "@/redux/types";
import { LocalStorageKeys } from "@/types";
import { getInLocalStorage, getJwtNowTime } from "@/utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const AuthGuard = () => {
  let interval: NodeJS.Timeout | null = null;
  const { checkTokenAndRefresh, hasExpired } = useAuth();
  const user = useSelector((state: IRootState) => state.user);
  const isAuthorize =
    !!getInLocalStorage(LocalStorageKeys.TOKEN) && !hasExpired(user.expiresIn);

  useEffect(() => {
    const duration = ((user.expiresIn - getJwtNowTime()) * 1000) / 2; // Call refresh on every half timelife token
    interval = setInterval(
      () => {
        if (isAuthorize) checkTokenAndRefresh(user);
      },
      duration > 10000 ? duration : 10000 // Avoid very small intervals
    );

    return () => {
      clearInterval(interval!);
      interval = null;
    };
  }, [user.expiresIn]);

  return isAuthorize ? <Outlet /> : <Logout />;
};
