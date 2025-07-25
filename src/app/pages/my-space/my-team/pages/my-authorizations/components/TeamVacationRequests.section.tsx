import { TeamVacationRequestCalendar } from "@/features/requests/components/calendars/TeamVacationRequestCalendar";
import { TeamVacationRequestTable } from "@/features/requests/components/tables/team/TeamVacationRequestTable";
import { VacationTemplate } from "@/shared/components/templates/VacationTemplate";

export const TeamVacationRequestsSection = () => {
  return (
    <VacationTemplate
      tableFeature={<TeamVacationRequestTable />}
      calendarFeature={<TeamVacationRequestCalendar />}
    />
  );
};
