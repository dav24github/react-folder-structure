import { UploadPersonalInfoForm } from "@/features/person/components/upload/personal-info/UploadPersonalInfoForm";
import { UploadPersonalInfoFormat } from "@/features/person/components/upload/personal-info/UploadPersonalInfoFormat";
import { Typography } from "@/shared/components/atoms/typography/Typography";
import { ElevatedCard } from "@/shared/components/organism/cards/elevated-card/ElevatedCard";
import { SectionContent } from "@/shared/components/organism/contents/section-content/SectionContent";
import { LeftRightLayout } from "@/shared/components/organism/layouts/left-right-layout/LeftRightLayout";

export const UploadPersonalInfoSection = () => {
  return (
    <ElevatedCard>
      <LeftRightLayout>
        <SectionContent title="1. Formato de carga">
          <Typography variant="subtitle1">
            Selecciona los datos que quieres registrar:
          </Typography>
          <UploadPersonalInfoFormat />
        </SectionContent>

        <SectionContent title="2. Subir archivo">
          <UploadPersonalInfoForm />
        </SectionContent>
      </LeftRightLayout>
    </ElevatedCard>
  );
};
