import React from "react";

export const VerifyUserForm = () => {
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
              <Textfield label="Usuario" name="username" />
            </FormBody>

            <FormActions colspan="1">
              <Button type="submit">Continuar</Button>
            </FormActions>
          </FormLayout>
        </form>
      )}
    </Formik>
  );
};
