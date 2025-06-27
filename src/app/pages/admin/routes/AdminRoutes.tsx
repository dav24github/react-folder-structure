import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UploadsRoutes from "../pages/uploads/routes/UploadsRoutes";

const UserCreationPage = lazy(
  () => import("../pages/user-creation/UserCreation.page")
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
        <Route path="user-creation" element={<UserCreationPage />} />
        <Route path="users" element={<UserPage />} />

        <Route path="uploads" element={<UploadsRoutes />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;
