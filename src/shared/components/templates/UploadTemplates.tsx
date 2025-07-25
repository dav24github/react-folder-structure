import { Outlet } from "react-router-dom";
import { Tabs } from "../molecules/tabs/Tabs";
import { VerticalLayout } from "../organism/layouts/vertical-layout/VerticalLayout";
import { ElevatedCard } from "../organism/cards/elevated-card/ElevatedCard";
import { CardTitle } from "../organism/cards/common/CardTitle";
import { Button } from "@mui/material";
import { LeftRightLayout } from "../organism/layouts/left-right-layout/LeftRightLayout";
import { SectionContent } from "../organism/contents/section-content/SectionContent";
import { Typography } from "../atoms/typography/Typography";

export const UploadTabsTemplate = () => {
  return (
    <VerticalLayout>
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
    </VerticalLayout>
  );
};

export const UploadFormatAndFormTemplate = ({
  title,
  uploadFormatFeature,
  uploadFormFeature,
}: any) => {
  return (
    <ElevatedCard>
      <CardTitle>{title}</CardTitle>
      <LeftRightLayout>
        <SectionContent title="1. Formato de carga">
          <Typography variant="subtitle1">
            Selecciona los datos que quieres registrar:
          </Typography>
          {uploadFormatFeature}
        </SectionContent>

        <SectionContent title="2. Subir archivo">
          {uploadFormFeature}
        </SectionContent>
      </LeftRightLayout>
    </ElevatedCard>
  );
};

export const UploadFormTemplate = ({ title, uploadFormFeature }: any) => {
  return (
    <ElevatedCard>
      <CardTitle center>{title}</CardTitle>
      <Button variant="outlined">Descargar formato</Button>
      {uploadFormFeature}
    </ElevatedCard>
  );
};
