import { MyVacationRequestCalendar } from "@/features/requests/calendars/MyVacationRequestCalendar";
import { MyVacationRequestTable } from "@/features/requests/tables/mine/MyVacationRequestTable";
import { VacationTemplate } from "@/shared/components/templates/VacationTemplate";

export const MyVacationRequestsSection = () => {
  return (
    <VacationTemplate
      tableFeature={<MyVacationRequestTable />}
      calendarFeature={<MyVacationRequestCalendar />}
    />
  );
};
