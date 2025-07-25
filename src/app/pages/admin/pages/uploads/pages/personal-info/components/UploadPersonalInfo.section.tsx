import { UploadPersonalInfoForm } from "@/features/person/components/upload/personal-info/UploadPersonalInfoForm";
import { UploadPersonalInfoFormat } from "@/features/person/components/upload/personal-info/UploadPersonalInfoFormat";
import { UploadFormatAndFormTemplate } from "@/shared/components/templates/UploadTemplates";

export const UploadPersonalInfoSection = () => {
  return (
    <UploadFormatAndFormTemplate
      title="Datos personales"
      uploadFormatFeature={<UploadPersonalInfoFormat />}
      uploadFormFeature={<UploadPersonalInfoForm />}
    />
  );
};
