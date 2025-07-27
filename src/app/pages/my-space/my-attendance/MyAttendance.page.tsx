import { Tabs } from "@/shared/components/molecules/tabs/Tabs";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { VerticalLayout } from "@/shared/components/organism/layouts/vertical-layout/VerticalLayout";
import { Outlet } from "react-router-dom";

export const MyAttendancePage = () => {
  return (
    <PageLayout title="Mis asistencias">
      <VerticalLayout>
        <Tabs
          orientation="vertical"
          sections={[
            {
              label: "Horarios",
              to: "/---",
            },
            {
              label: "Marcaje",
              to: "/---",
            },
          ]}
        />
        <Outlet />
      </VerticalLayout>
    </PageLayout>
  );
};
