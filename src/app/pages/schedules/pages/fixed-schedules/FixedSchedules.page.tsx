import { FixedSchedulesTable } from "@/features/schedules/fixed-schedules/components/fixed-schedules-table/FixedSchedulesTable";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

const FixedSchedulesPage = () => {
  return (
    <PageLayout title="Horarios">
      <FixedSchedulesTable />
    </PageLayout>
  );
};

export default FixedSchedulesPage;
