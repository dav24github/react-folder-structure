import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const SchedulesRoutes = () => {
  return (
    <Suspense
      fallback={
        <LoadingSpinner noBackdrop color="secondary" display size="small" />
      }
    >
      <Routes>
        {/* <Route path="/" element={<Navigate to="login" />} /> */}
        <Route path="fixed" element={<FixedSchedulesPage />} />
        <Route path="fixed/:id" element={<WorkerFixedSchedulePage />} />
        <Route
          path="fixed/:id/history"
          element={<WorkerFixedScheduleHistoryPage />}
        />

        <Route path="seasonal/working-groups" element={<WorkingGroupsPage />} />
        <Route
          path="seasonal/working-groups/:id"
          element={<WorkingGroupPage />}
        />

        <Route path="attendances" element={<AttendancesPage />} />
        <Route path="attendances/:id" element={<WorkerAttendancePage />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default SchedulesRoutes;
