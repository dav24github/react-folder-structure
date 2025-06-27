import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/login/Login.page"));

const AuthRoutes = () => {
  return (
    <Suspense
      fallback={
        <LoadingSpinner noBackdrop color="secondary" display size="small" />
      }
    >
      <Routes>
        {/* <Route path="/" element={<Navigate to="login" />} /> */}
        <Route path="login" element={<LoginPage />} />
        <Route path="verify-user" element={<VerifyUserPage />} />

        <Route path="confimation-code" element={<ConfirmationCodePage />} />
        <Route path="new-password" element={<NewPasswordPage />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
