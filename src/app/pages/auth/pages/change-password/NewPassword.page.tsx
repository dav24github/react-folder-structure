import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { MainCard } from "@/components/ui";
import { useCallEndpoint, useGoToUrl } from "@/hooks";
import { updatePasswordService } from "../services/password.service";
import { PopUpUtilities } from "@/services";
import { TNewPasswordForm } from "../types/password.types";
import { NewPasswordForm } from "../shared/components/forms/NewPasswordForm";
import classes from "./_page.module.scss";
import LogoCompany from "@/components/logo-company/LogoCompany";

const NewPasswordPage = () => {
  return (
    <main className={classes.root}>
      <Box className={classes.content}>
        <LogoCompany />
        <MainCard
          title="Cambio de contraseña"
          size="normal"
          goBack={() => handleGoTo("confirmation-code")}
        >
          <NewPassword />
        </MainCard>
      </Box>
    </main>
  );
};

export default NewPasswordPage;
