import { TeamVacationRequestCalendar } from "@/features/requests/calendars/TeamVacationRequestCalendar";
import { TeamVacationRequestTable } from "@/features/requests/tables/team/TeamVacationRequestTable";
import { VacationTemplate } from "@/shared/components/templates/VacationTemplate";

export const TeamVacationRequestsSection = () => {
  return (
    <VacationTemplate
      tableFeature={<TeamVacationRequestTable />}
      calendarFeature={<TeamVacationRequestCalendar />}
    />
  );
};
