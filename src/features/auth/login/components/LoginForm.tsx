import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { storeUser } from "@/redux/states/user-slice";
import { useNavigate } from "react-router-dom";
import {
  BtnsContainer,
  FormGroup,
  SubmitButton,
  Textfield,
} from "@/components/ui";
import { FormLayout } from "@/styled-components";
import { useCallEndpoint, useFormBuilder } from "@/hooks";
import { loginService } from "../services/login.service";
import { saveInLocalStorage } from "@/utils";
import { LocalStorageKeys } from "@/types";
import { LoginRequest } from "../types/auth.types";
import { loginFormBuilder } from "../utils/loginFormBuilder";
import { useMemo } from "react";

export const LoginForm = () => {
  const { initialValues, checkoutSchema } = useMemo(
    () => useFormBuilder(loginFormBuilder()),
    []
  );
  const { callEndpoint } = useCallEndpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values: LoginRequest) => {
    const { authUser, token } = await callEndpoint(loginService(values));
    saveInLocalStorage(LocalStorageKeys.TOKEN, token);
    saveInLocalStorage(LocalStorageKeys.AUTH_USER, authUser);

    dispatch(storeUser(authUser));

    if (authUser.username.startsWith("A-")) {
      navigate("/attendance-worker");
    } else {
      navigate("/home");
    }
  };

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
            <FormGroup>
              <Textfield label="Usuario" name="username" />
              <Textfield
                label="Contraseña"
                name="password"
                type="password"
                toggleIcons={["VisibilityOffOutlined", "VisibilityOutlined"]}
              />
            </FormGroup>
            <BtnsContainer>
              <SubmitButton>Iniciar sesión</SubmitButton>
            </BtnsContainer>
          </FormLayout>
        </form>
      )}
    </Formik>
  );
};
