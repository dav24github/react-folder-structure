import { LoadingSpinner } from "@/components/ui";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { WorkersPage } from "../pages/workers-management/Workers.page";
import { WorkerJobPage } from "../pages/workers-management/WorkerJob.page";
import { WorkerProjectsPage } from "../pages/workers-management/WorkerProjects.page";
import { WorkerProfilePage } from "../pages/workers-management/WorkerProfile.page";
import { DocumentsPage } from "../pages/Documents.page";
import { WorkersRequestsPage } from "../pages/workers-requests/WorkersRequests.page";

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

        <Route path="/requests" element={<WorkersRequestsPage />} />
        <Route path="/requests/licenses" element={<WorkersRequestsPage />} />
        <Route path="/requests/vacation" element={<WorkersRequestsPage />} />
        <Route path="/requests/extra-hours" element={<WorkersRequestsPage />} />

        <Route path="/documents" element={<DocumentsPage />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default WorkerRoutes;
