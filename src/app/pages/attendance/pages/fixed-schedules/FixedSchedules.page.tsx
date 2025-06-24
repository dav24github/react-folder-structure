import { PageLayout } from "@/components/layouts";
import { FixedScheduleTable } from "@/features/schedules/fixed-schedules/fixed-schedules-table";

const FixedSchedulesPage = () => {
  return (
    <PageLayout paddingRB title="Horarios">
      <FixedScheduleTable />
    </PageLayout>
  );
};

export default FixedSchedulesPage;
