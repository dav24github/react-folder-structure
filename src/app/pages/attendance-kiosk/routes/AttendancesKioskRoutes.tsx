import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AttendancesKioskRoutes = () => {
  return (
    <Suspense
      fallback={
        <LoadingSpinner noBackdrop color="secondary" display size="small" />
      }
    >
      <Routes>
        {/* <Route path="/" element={<Navigate to=" " />} /> */}
        <Route path="home" element={<AttendancesKioskHomePage />} />
        <Route path="marking" element={<AttendancesKioskMarkingPage />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default AttendancesKioskRoutes;
