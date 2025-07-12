import { FormRow } from "@/shared/components/molecules/containers/form-row/FormRow";
import {
  FormActions,
  FormBody,
  FormLayout,
} from "@/shared/components/organism/layouts/form-layout/FormLayout";
import { Button, FormGroup } from "@mui/material";

export const NewUserForm = () => {
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormLayout>
            <FormBody>
              <FormGroup>
                <FormRow>
                  <Textfield label="Documento de identidad" name="ci" />
                  <Textfield
                    label="Complemento"
                    name="complement"
                    helperIconText={<HelperComplement />}
                  />
                </FormRow>
                <FormRow>
                  <Textfield label="Primer nombre" name="name" />
                  <Textfield label="Segundo nombre" name="secondName" />
                </FormRow>
                <FormRow>
                  <Textfield label="Primer apellido" name="firstLastname" />
                  <Textfield label="Segundo apellido" name="secondLastname" />
                </FormRow>
                <Textfield label="Correo personal" name="email" />
                <Textfield label="Correo corporativo" name="corporateEmail" />
                <SelectField
                  label="Rol de usuario"
                  name="idRole"
                  options={roles!}
                />
              </FormGroup>
            </FormBody>

            <FormActions colspan="1">
              <Button type="submit">Crear usuario</Button>
            </FormActions>
          </FormLayout>
        </form>
      )}
    </Formik>
  );
};
