import { UploadUserForm } from "@/features/user/components/upload/UploadUserForm";
import { UploadUserFormat } from "@/features/user/components/upload/UploadUserFormat";
import { ElevatedCard } from "@/shared/components/organism/cards/elevated-card/ElevatedCard";
import { SectionContent } from "@/shared/components/organism/contents/section-content/SectionContent";
import { LeftRightLayout } from "@/shared/components/organism/layouts/left-right-layout/LeftRightLayout";
import { Typography } from "@mui/material";

const MassiveUserCretionSection = () => {
  return (
    <ElevatedCard title="Varios usuarios">
      <LeftRightLayout>
        <SectionContent title="1. Formato de carga">
          <Typography variant="subtitle1">
            Selecciona los datos que quieres registrar:
          </Typography>
          <UploadUserFormat />
        </SectionContent>

        <SectionContent title="2. Subir archivo">
          <UploadUserForm />
        </SectionContent>
      </LeftRightLayout>
    </ElevatedCard>
  );
};

export default MassiveUserCretionSection;
