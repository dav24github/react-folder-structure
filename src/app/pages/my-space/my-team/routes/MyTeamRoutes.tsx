import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const MyTeamRoutes = () => {
  return (
    <Suspense fallback={LoadingSpinnerImport}>
      <Routes>
        <Route path="" element={<MyTeamPage />} />

        <Route path="requests" element={<MyAuthorizationPage />} />
        <Route path="requests/licenses" element={<MyAuthorizationPage />} />
        <Route path="requests/vacation" element={<MyAuthorizationPage />} />
        <Route path="requests/extra-hours" element={<MyAuthorizationPage />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};
