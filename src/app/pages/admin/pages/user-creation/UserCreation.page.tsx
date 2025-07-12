import { Tabs } from "@/shared/components/molecules/tabs/Tabs";
import { HorizontalLayout } from "@/shared/components/organism/layouts/horizontal-layout/HorizontalLayout";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { Outlet } from "react-router-dom";

const UserCreationPage = () => {
  return (
    <PageLayout title="Creación de usuarios">
      <HorizontalLayout>
        <Tabs
          orientation="vertical"
          sections={[
            {
              label: "Nuevo usuario",
              to: "/---",
            },
            {
              label: "Varios usuarios",
              to: "/---",
            },
          ]}
        />
        <Outlet />
      </HorizontalLayout>
    </PageLayout>
  );
};

export default UserCreationPage;
