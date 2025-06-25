export const RequestsReportSection = () => {
  return (
    <MyTabs
      fixed
      indexHasSubTabs={[1]}
      labels={["Permisos", "Vacaciones", "Horas extras"]}
      tabPanels={[
        <LicenseRequestReportSection />,
        <VacationRequestsReportSection />,
        <ExtraHoursRequestsReportSection />,
      ]}
      currentIndex={0}
    />
  );
};
