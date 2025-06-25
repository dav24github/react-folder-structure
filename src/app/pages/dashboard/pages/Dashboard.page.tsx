import { AttendanceReportSection } from "./components/AttendanceDashboard.section";
import { PayrollReportSection } from "./components/payroll-report-section/PayrollReport.section";
import { RequestsReportSection } from "./components/requests-report/RequestsReport.section";

const ReportsPage = () => {
  return (
    <PageLayout title="Creación de usuarios">
      <MyTabs
        fixed
        indexHasSubTabs={[1]}
        orientation="vertical"
        labels={[
          "Asistencia",
          "Solicitudes",
          "Planillas",
          "Boletas de pago",
          "Indemnización",
          "Subisidios",
          "Personalizados",
          "Curriculum vitae",
        ]}
        tabPanels={[
          <AttendanceReportSection />,
          <RequestsReportSection />,
          <PayrollReportSection />,
        ]}
        currentIndex={0}
      />
    </PageLayout>
  );
};

export default ReportsPage;
