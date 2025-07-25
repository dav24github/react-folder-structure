import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { WorkersPage } from "../pages/workers-management/Workers.page";
import { WorkerJobPage } from "../pages/workers-management/WorkerJob.page";
import { WorkerProjectsPage } from "../pages/workers-management/WorkerProjects.page";
import { WorkerProfilePage } from "../pages/workers-management/WorkerProfile.page";
import { DocumentsPage } from "../pages/Documents.page";
import { WorkersRequestsPage } from "../pages/workers-requests/WorkersRequests.page";
import { WorkersLicenseRequestsSection } from "../pages/workers-requests/components/WorkersLicenseRequests.section";
import { WorkersVacationRequestsSection } from "../pages/workers-requests/components/WorkersVacationRequests.section";
import { WorkersExtraHoursRequestsSection } from "../pages/workers-requests/components/WorkersExtraHoursRequests.section";

// LAZY LOADING !!!

const WorkerRoutes = () => {
  return (
    <Suspense
      fallback={
        <LoadingSpinner noBackdrop color="secondary" display size="small" />
      }
    >
      <Routes>
        {/* <Route path="/" element={<Navigate to="login" />} /> */}
        <Route path="" element={<WorkersPage />} />
        <Route path="/:username" element={<WorkerProfilePage />} />
        <Route path="/:id/job" element={<WorkerJobPage />} />
        <Route path="/:id/projects" element={<WorkerProjectsPage />} />

        <Route path="/requests" element={<WorkersRequestsPage />}>
          <Route
            path="/requests/licenses"
            element={<WorkersLicenseRequestsSection />}
          />
          <Route
            path="/requests/vacation"
            element={<WorkersVacationRequestsSection />}
          />
          <Route
            path="/requests/extra-hours"
            element={<WorkersExtraHoursRequestsSection />}
          />
        </Route>

        <Route path="/documents" element={<DocumentsPage />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default WorkerRoutes;
