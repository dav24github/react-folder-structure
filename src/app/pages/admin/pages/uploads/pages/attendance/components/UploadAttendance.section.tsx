import { UploadAttendanceForm } from "@/features/atendances/upload/upload-attendance/UploadAttendanceForm";
import { UploadFormTemplate } from "@/shared/components/templates/UploadTemplates";

export const UploadAttendanceSection = () => {
  return (
    <UploadFormTemplate
      title="Asistencias"
      uploadFormFeature={<UploadAttendanceForm />}
    />
  );
};
