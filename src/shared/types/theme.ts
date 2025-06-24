import { Palette, Theme } from "@mui/material/styles";
declare module "@mui/system" {
  interface DefaultTheme extends Theme {}
}

type TColors = {
  grey: any;
  primary: any;
  secondary: any;
  error: any;
  success: any;
  warning: any;
};

type TMediaQuery = {
  downSm: string;
  downLg: string;
};

type TExtra = {
  paddingSeparator: {
    ps1: number;
    ps2: number;
  };
  tabsWidth: number;
  drawerWidth: number;
  spinnerSize: {
    sm: number;
    md: number;
    lg: number;
  };
  borderRadius: {
    br1: string;
    br2: string;
  };
  zIndex: {
    z0: number;
    z1: number;
    z2: number;
    z3: number;
    Z100: number;
    Z200: number;
    Z300: number;
    Z400: number;
    Z500: number;
    Z600: number;
  };
};

export type MyTheme = {
  palette?: Palette & {
    error: {
      lighter: string;
    };
    success: {
      lighter: string;
    };
    secondary: {
      lighter: string;
    };
    info: {
      lighter: string;
    };
  };
  colors: TColors;
  mediaQuery: TMediaQuery;
  extra: TExtra;
  typography?: {
    xlh1: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    subtitle1: any;
    subtitle2: any;
    body1: any;
    body2: any;
    body3: any;
    button: any;
  };
};
