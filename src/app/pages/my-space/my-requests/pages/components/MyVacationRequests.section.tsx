import { MyVacationRequestCalendar } from "@/features/requests/components/calendars/MyVacationRequestCalendar";
import { MyVacationRequestTable } from "@/features/requests/components/tables/mine/MyVacationRequestTable";
import { VacationTemplate } from "@/shared/components/templates/VacationTemplate";

export const MyVacationRequestsSection = () => {
  return (
    <VacationTemplate
      tableFeature={<MyVacationRequestTable />}
      calendarFeature={<MyVacationRequestCalendar />}
    />
  );
};
