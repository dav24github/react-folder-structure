import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MyAuthorizationPage } from "../pages/my-authorizations/MyAuthorization.page";
import { TeamLicenseRequestsSection } from "../pages/my-authorizations/components/TeamLicenseRequests.section";
import { TeamVacationRequestsSection } from "../pages/my-authorizations/components/TeamVacationRequests.section";
import { TeamExtraHoursRequestsSection } from "../pages/my-authorizations/components/TeamExtraHoursRequests.section";

export const MyTeamRoutes = () => {
  return (
    <Suspense fallback={LoadingSpinnerImport}>
      <Routes>
        <Route path="" element={<MyTeamPage />} />

        <Route path="/requests" element={<MyAuthorizationPage />}>
          <Route
            path="/requests/licenses"
            element={<TeamLicenseRequestsSection />}
          />
          <Route
            path="/requests/vacation"
            element={<TeamVacationRequestsSection />}
          />
          <Route
            path="/requests/extra-hours"
            element={<TeamExtraHoursRequestsSection />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};
