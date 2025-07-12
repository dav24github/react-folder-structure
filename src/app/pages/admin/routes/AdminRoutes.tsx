import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UploadsRoutes from "../pages/uploads/routes/UploadsRoutes";

const UserCreationPage = lazy(
  () => import("../pages/user-creation/UserCreation.page")
);
const SingleUserCretionSection = lazy(
  () => import("../pages/user-creation/components/SingleUserCretion.section")
);
const MassiveUserCretionSection = lazy(
  () => import("../pages/user-creation/components/MassiveUserCretion.section")
);
const UserPage = lazy(() => import("../pages/Users.page"));

const AdminRoutes = () => {
  return (
    <Suspense
      fallback={
        <LoadingSpinner noBackdrop color="secondary" display size="small" />
      }
    >
      <Routes>
        <Route path="user-creation" element={<UserCreationPage />}>
          <Route
            index
            path="user-creation/single"
            element={<SingleUserCretionSection />}
          />
          <Route
            path="user-creation/upload"
            element={<MassiveUserCretionSection />}
          />
        </Route>

        <Route path="users" element={<UserPage />} />

        <Route path="uploads" element={<UploadsRoutes />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;
