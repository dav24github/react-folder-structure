import { Outlet } from "react-router-dom";
import { Tabs } from "../molecules/tabs/Tabs";
import { HorizontalLayout } from "../organism/layouts/horizontal-layout/HorizontalLayout";

export const UploadTemplate = () => {
  return (
    <HorizontalLayout>
      <Tabs
        orientation="vertical"
        sections={[
          {
            label: "Subir usuarios",
            to: "/---",
          },
          {
            label: "Historial",
            to: "/---",
          },
        ]}
      />
      <Outlet />
    </HorizontalLayout>
  );
};
