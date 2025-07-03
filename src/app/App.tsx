import { useLayoutEffect } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./theme";
import { axiosInstance } from "./services/axios.service";
import { AppRoutes } from "./routes/AppRoutes";
import { DevelopMode, PopUp } from "./components";
import { LoadingSpinner } from "./components/ui";
import { setupInterceptorsTo } from "./interceptors";
import { Toast } from "./components/pop-up/Toast";

export const App = () => {
  useLayoutEffect(() => {
    setupInterceptorsTo(axiosInstance);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PopUp />
        <Toast />
        <LoadingSpinner />
        <AppRoutes />
        {(import.meta.env.MODE === "development" ||
          import.meta.env.MODE === "dev") && <DevelopMode />}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
