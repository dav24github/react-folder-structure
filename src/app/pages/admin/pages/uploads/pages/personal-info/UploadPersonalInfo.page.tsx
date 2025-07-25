import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { UploadTabsTemplate } from "@/shared/components/templates/UploadTemplates";

const UploadPersonalInfoPage = () => {
  return (
    <PageLayout
      breadCrumbs={[
        {
          label: "Carga de datos",
          onClick: () => {},
        },
        {
          label: `Edición masiva | Datos trabajador`,
        },
      ]}
    >
      <UploadTabsTemplate />
    </PageLayout>
  );
};

export default UploadPersonalInfoPage;
