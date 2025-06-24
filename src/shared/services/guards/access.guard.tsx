import { GoToAccessDenied } from "@/components/abstracts/GoToAccessDenied";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const AccessGuard = () => {
  const location = useLocation();
  const { user } = useUser();
  const [allowedRoutes, setAllowedRoutes] = useState<string[] | null>(null);
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const allowedRoutesData = [];
    for (let index = 0; index < user.access.length; index++) {
      const element = user.access[index];
      if (element.nestedItems) {
        const routes = element.nestedItems.map((obj) => "/" + obj.url);
        allowedRoutesData.push(...routes);
      } else {
        allowedRoutesData.push("/" + element.url);
      }
    }
    setAllowedRoutes([...allowedRoutesData, "profile", "personal-info"]);
  }, []);

  useEffect(() => {
    if (allowedRoutes) {
      let isAllowed = false;
      for (let index = 0; index < allowedRoutes.length; index++) {
        if (location.pathname.includes(allowedRoutes[index])) {
          isAllowed = true;
          break;
        }
      }
      setAllowed(isAllowed);
    }
  }, [allowedRoutes, location.pathname]);

  return allowed === null ? <></> : allowed ? <Outlet /> : <GoToAccessDenied />;
};
