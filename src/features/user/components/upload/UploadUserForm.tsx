import React from "react";

export const UploadUserForm = () => {
  return (
    <FormLayout>
      <FormBody>
        <UploadExcel />
      </FormBody>
      <FormActions>
        <Button startIcon="download" type="submit" variant="outlined">
          Descargar formato
        </Button>
      </FormActions>
    </FormLayout>
  );
};
