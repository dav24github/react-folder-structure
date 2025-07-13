import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UploadPersonalInfoSection } from "../pages/personal-info/components/UploadPersonalInfo.section";
import { HistoryUploadPersonalInfoSection } from "../pages/personal-info/components/HistoryUploadPersonalInfo.section";
import { UploadAttendancePage } from "../pages/attendance/UploadAttendance.page";

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

        <Route path="personal-info/edit" element={<UploadPersonalInfoPage />}>
          <Route index path="upload" element={<UploadPersonalInfoSection />} />
          <Route
            path="history"
            element={<HistoryUploadPersonalInfoSection />}
          />
        </Route>
        {/* <Route path="personal-info/edit" element={<UploadPersonalInfoPage />}>
          <Route index path="upload" element={<UploadPersonalInfoSection />} />
          <Route
            path="history"
            element={<HistoryUploadPersonalInfoSection />}
          />
        </Route> */}

        <Route path="personal-info/record" element={<UploadAttendancePage />}>
          <Route index path="upload" element={<UploadPersonalInfoSection />} />
          <Route
            path="history"
            element={<HistoryUploadPersonalInfoSection />}
          />
        </Route>
        {/* <Route path="personal-info/record" element={<UploadPersonalInfoPage />} />
        <Route path="personal-info/record" element={<UploadPersonalInfoPage />} />
        <Route path="personal-info/record" element={<UploadPersonalInfoPage />} /> */}

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default UploadsRoutes;
