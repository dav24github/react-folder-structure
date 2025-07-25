import { WorkersVacationRequestCalendar } from "@/features/requests/components/calendars/WorkersVacationRequestCalendar";
import { WorkersVacationRequestTable } from "@/features/requests/components/tables/workers/WorkersVacationRequestTable";
import { VacationTemplate } from "@/shared/components/templates/VacationTemplate";

export const WorkersVacationRequestsSection = () => {
  return (
    <VacationTemplate
      tableFeature={<WorkersVacationRequestTable />}
      calendarFeature={<WorkersVacationRequestCalendar />}
    />
  );
};
