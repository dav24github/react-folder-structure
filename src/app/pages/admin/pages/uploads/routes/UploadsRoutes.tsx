import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const UploadsPage = lazy(() => import("../pages/Uploads.page"));
const UploadPersonalInfoPage = lazy(
  () => import("../pages/personal-info/UploadPersonalInfo.page")
);

const UploadsRoutes = () => {
  return (
    <Suspense
      fallback={
        <LoadingSpinner noBackdrop color="secondary" display size="small" />
      }
    >
      <Routes>
        <Route path="" element={<UploadsPage />} />

        <Route path="personal-info/edit" element={<UploadPersonalInfoPage />} />
        {/* <Route path="edit/personal-info" element={<UploadPersonalInfoPage />} />
        <Route path="edit/personal-info" element={<UploadPersonalInfoPage />} />
        <Route path="edit/personal-info" element={<UploadPersonalInfoPage />} /> */}

        <Route path="attendance/record" element={<UploadAttendancePage />} />
        {/* <Route path="personal-info/record" element={<UploadPersonalInfoPage />} />
        <Route path="personal-info/record" element={<UploadPersonalInfoPage />} />
        <Route path="personal-info/record" element={<UploadPersonalInfoPage />} /> */}

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default UploadsRoutes;
