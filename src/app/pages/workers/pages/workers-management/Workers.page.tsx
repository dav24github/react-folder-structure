import { WorkerTable } from "@/features/worker/components/worker-table/WorkerTable";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

export const WorkersPage = () => {
  return (
    <PageLayout title="Lista de trabajadores">
      <WorkerTable />
    </PageLayout>
  );
};
