import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const MyRequestsRoutes = () => {
  return (
    <Suspense fallback={LoadingSpinnerImport}>
      <Routes>
        <Route path="" element={<MyRequestsPage />}>
          <Route path="/licenses" element={<MyLicenseRequestsSection />} />
          <Route path="/vacation" element={<MyVacationRequestsSection />} />
          <Route
            path="/extra-hours"
            element={<MyExtraHoursRequestsSection />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};
