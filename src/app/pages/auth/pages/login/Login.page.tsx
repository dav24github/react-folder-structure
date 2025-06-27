import { Box } from "@mui/material";

import { MyTypography } from "@/components/ui/MyTypography";
import { useLoginStyles } from "./login.styles";
import BgLoginIMG from "@/assets/images/bg-login.png";
import TekovSVG from "@/assets/svgs/tekov.svg";
import { Link } from "react-router-dom";
import { ComponentCard } from "@/components/ui";
import { LoginForm } from "@/features/auth/login";

const LoginPage = () => {
  const styles = useLoginStyles();

  return (
    <main className={styles.root}>
      <Box className={styles.left}>
        <img src={BgLoginIMG} alt="bg" className={styles.bgImg} />
        <Box className={styles.titleBanner}>
          <MyTypography variant="h1" color="white">
            ¡Bienvenido a
          </MyTypography>
          <MyTypography variant="h1" color="white">
            tu espacio!
          </MyTypography>
        </Box>
      </Box>
      <Box className={styles.right}>
        <Box className={styles.content}>
          <Box className={styles.logo}>
            <img src={TekovSVG} alt="Tekov" />
          </Box>
          <ComponentCard width="340px" title="Login" center>
            <Box className={styles.form}>
              <LoginForm />
            </Box>
          </ComponentCard>
          <MyTypography
            className={styles.linkPass}
            color="info"
            muiProps={{
              component: Link,
              to: `/change-password`,
            }}
          >
            ¿Olvidaste tu contraseña?
          </MyTypography>
        </Box>
      </Box>
    </main>
  );
};

export default LoginPage;
