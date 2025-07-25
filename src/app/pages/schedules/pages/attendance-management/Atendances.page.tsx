import { AttendancesTable } from "@/features/atendances/components/attendances-table/AttendancesTable";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

export const AtendancesPage = () => {
  return (
    <PageLayout title="Asistencias">
      <AttendancesTable />
    </PageLayout>
  );
};
