import { SectionContent } from "../organism/contents/section-content/SectionContent";
import { CardTabs } from "../organism/layouts/card-tabs/CardTabs";
import { LeftRightLayout } from "../organism/layouts/left-right-layout/LeftRightLayout";

export const UploadTemplate = ({
  formatDownloadFeature,
  uploadFeature,
  uploadTableFeature,
}: any) => {
  return (
    <CardTabs
      orientation="horizontal"
      labels={["Subir archivo", "Historial"]}
      tabPanels={[
        <LeftRightLayout>
          <SectionContent title="1. Formato de carga">
            <Typography variant="subtitle1">
              Selecciona los datos que quieres registrar:
            </Typography>

            {formatDownloadFeature}
          </SectionContent>
          <SectionContent title="2. Subir archivo">
            {uploadFeature}
          </SectionContent>
        </LeftRightLayout>,
        uploadTableFeature,
      ]}
      currentIndex={0}
    />
  );
};
