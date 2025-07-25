import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { UploadTabsTemplate } from "@/shared/components/templates/UploadTemplates";

export const UploadAttendancePage = () => {
  return (
    <PageLayout
      breadCrumbs={[
        {
          label: "Carga de datos",
          onClick: () => {},
        },
        {
          label: `Registro masivo | Asistencias`,
        },
      ]}
    >
      <UploadTabsTemplate />
    </PageLayout>
  );
};
