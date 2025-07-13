import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { UploadTemplate } from "@/shared/components/templates/UploadTemplate";

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
      <UploadTemplate />
    </PageLayout>
  );
};

export default UploadPersonalInfoPage;
