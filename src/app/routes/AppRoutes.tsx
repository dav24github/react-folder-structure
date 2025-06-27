import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../pages/auth/routes/AuthRoutes";
import { NotFoundPage } from "../pages/_fallback/NotFound.page";
import { AccesDeniedPage } from "../pages/_fallback/AccesDenied.page";
import AdminRoutes from "../pages/admin/routes/AdminRoutes";
import WorkersRoutes from "../pages/workers/routes/WorkerRoutes";
import AttendancesKioskRoutes from "../pages/attendance-kiosk/routes/AttendancesKioskRoutes";
import SchedulesRoutes from "../pages/schedules/routes/schedules.route";
import { MyAttendancePage } from "../pages/my-space/MyAttendance.page";
import { MyTeamRoutes } from "../pages/my-space/my-team/routes/MyTeamRoutes";
import { MyProfilePage } from "../pages/MyProfile.page";
import { ChangePasswordPage } from "../pages/ChangePassword.page";
import ReportsPage from "../pages/dashboard/pages/Dashboard.page";

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
            <Route
              path="attendance-kiosk"
              element={<AttendancesKioskRoutes />}
            />

            <Route element={<OutledMainLayout />}>
              <Route path="home" element={<HomePage />} />
              <Route path=":user" element={<MyProfilePage />} />
              <Route path="change-password" element={<ChangePasswordPage />} />

              <Route path="admin" element={<AdminRoutes />} />
              <Route path="workers" element={<WorkersRoutes />} />
              <Route path="schedules" element={<SchedulesRoutes />} />

              {/* My space routes */}
              <Route path="my-attendance" element={<MyAttendancePage />} />

              <Route path="my-requests" element={<MyRequestsPage />} />
              <Route path="my-requests/licenses" element={<MyRequestsPage />} />
              <Route path="my-requests/vacation" element={<MyRequestsPage />} />
              <Route
                path="my-requests/extra-hours"
                element={<MyRequestsPage />}
              />

              <Route path="my-payslips" element={<MyPayslipsPage />} />
              <Route path="my-advances" element={<MyAdvancesPage />} />
              <Route path="my-team" element={<MyTeamRoutes />} />
              {/* *********************** */}

              <Route path="payroll" element={<PayrollRoutes />} />
              <Route path="compensation" element={<CompensationRoutes />} />
              <Route path="projects" element={<ProjectsRoutes />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};
