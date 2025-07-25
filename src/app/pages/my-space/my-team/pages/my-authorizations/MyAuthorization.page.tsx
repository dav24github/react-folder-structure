import { Tabs } from "@/shared/components/molecules/tabs/Tabs";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { VerticalLayout } from "@/shared/components/organism/layouts/vertical-layout/VerticalLayout";
import { Outlet } from "react-router-dom";

export const MyAuthorizationPage = () => {
  return (
    <PageLayout title="Solicitudes">
      <VerticalLayout>
        <Tabs
          orientation="vertical"
          sections={[
            {
              label: "Permisos",
              to: "/---",
            },
            {
              label: "Vacaciones",
              to: "/---",
            },
            {
              label: "Horas extras",
              to: "/---",
            },
          ]}
        />
        <Outlet />
      </VerticalLayout>
    </PageLayout>
  );
};
