import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../pages/auth/routes/AuthRoutes";
import { NotFoundPage } from "../pages/_fallback/pages/NotFound.page";
import { AccesDeniedPage } from "../pages/_fallback/pages/AccesDenied.page";

const LoadingSpinnerImport = (
  <LoadingSpinner noBackdrop color="secondary" display size="small" />
);

const HomePage = lazy(() => import("../pages/home/Home.page"));

export const AppRoutes = () => {
  const { isAttendanceWorkerUser } = useAuth();

  return (
    <Suspense fallback={LoadingSpinnerImport}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAttendanceWorkerUser() ? "foo" : "boo"} />}
        />
        <Route path="access-denied" element={<AccesDeniedPage />} />
        <Route path="not-found" element={<NotFoundPage />} />

        <Route path="auth/*" element={<AuthRoutes />} />

        <Route element={<AuthGuard />}>
          <Route element={<AccessGuard />}>
            <Route element={<OutledMainLayout />}>
              <Route path="home" element={<HomePage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};
