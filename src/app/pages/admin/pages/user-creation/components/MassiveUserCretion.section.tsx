import { UploadUserForm } from "@/features/user/components/upload/UploadUserForm";
import { UploadUserFormat } from "@/features/user/components/upload/UploadUserFormat";
import { UploadUserTable } from "@/features/user/components/upload/UploadUserTable";
import { ElevatedCard } from "@/shared/components/organism/cards/elevated-card/ElevatedCard";
import { UploadTemplate } from "@/shared/components/templates/UploadTemplate";

const MassiveUserCretionSection = () => {
  return (
    <ElevatedCard title="Varios usuarios">
      <UploadTemplate
        formatDownloadFeature={<UploadUserFormat />}
        uploadFeature={<UploadUserForm />}
        uploadTableFeature={<UploadUserTable />}
      />
    </ElevatedCard>
  );
};

export default MassiveUserCretionSection;
