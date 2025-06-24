import { createTheme, Theme } from "@mui/material/styles";
import { MyTheme } from "./types";

// styles design tokens
export const tokens: MyTheme = {
  colors: {
    grey: {
      100: "#F2F2F7",
      200: "#E5E5EA",
      300: "#D1D1D6",
      400: "#C7C7CC",
      500: "#AEAEB2",
      550: "#8E8E93",
      600: "#636366",
      700: "#48484A",
      800: "#3A3A3C",
      900: "#2C2C2E",
      1000: "#1C1C1E",
    },
    primary: {
      10: "#f5f8ff",
      50: "#e6efff",
      100: "#b4d0fe",
      200: "#82b1fd",
      300: "#5091FC",
      400: "#1e72fb",
      500: "#0459e1",
      600: "#0345af",
      700: "#02317d",
      800: "#011e4b",
      850: "#011638",
      900: "#000a19",
    },
    secondary: {
      100: "#F2F2F7",
      300: "#D1D1D6",
      550: "#8E8E93",
      600: "#636366",
    },
    error: {
      50: "#ffe6e8",
      100: "#ffb3bb",
      200: "#fe808d",
      300: "#fe4d5f",
      400: "#fe1a32",
      500: "#e50118",
      550: "#FE0B24",
      600: "#b20113",
      700: "#7f010e",
      800: "#4c0008",
      900: "#190003",
    },
    success: {
      0: "#e9fffa",
      1: "#70FFE0",
      2: "#01C9A0",
      3: "#01725b",
    },
    warning: {
      0: "#fff7e5",
      1: "#FFAC00",
      2: "#cc8a02",
    },
  },
  mediaQuery: {
    downSm: "(max-width:600px)",
    downLg: "(max-width:1200px)",
  },
  extra: {
    paddingSeparator: {
      ps1: 60,
      ps2: 80,
    },
    tabsWidth: 180,
    drawerWidth: 260,
    spinnerSize: {
      sm: 18,
      md: 32,
      lg: 40,
    },
    borderRadius: {
      br1: "12px",
      br2: "14px",
    },
    zIndex: {
      z0: 0,
      z1: 1,
      z2: 2,
      z3: 3,
      Z100: 100,
      Z200: 200,
      Z300: 300,
      Z400: 400,
      Z500: 500,
      Z600: 600,
    },
  },
};

// mui theme settings
const themeSettings = (theme: Theme) => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        light: tokens.colors.primary[700],
        main: tokens.colors.primary[800],
        dark: tokens.colors.primary[900],
      },
      secondary: {
        lighter: tokens.colors.secondary[100],
        light: tokens.colors.secondary[300],
        main: tokens.colors.secondary[600],
        dark: tokens.colors.secondary[700],
      },
      grey: {
        ...tokens.colors.grey,
      },
      success: {
        lighter: tokens.colors.success[0],
        light: tokens.colors.success[1],
        main: tokens.colors.success[2],
        dark: tokens.colors.success[3],
      },
      warning: {
        light: tokens.colors.warning[0],
        main: tokens.colors.warning[1],
        dark: tokens.colors.warning[2],
      },
      error: {
        lighter: tokens.colors.error[100],
        light: tokens.colors.error[200],
        main: tokens.colors.error[300],
        dark: tokens.colors.error[500],
      },
      info: {
        lighter: tokens.colors.primary[50],
        light: tokens.colors.primary[100],
        main: tokens.colors.primary[300],
        dark: tokens.colors.primary[500],
      },
      background: {
        default: tokens.colors.primary[10],
        paper: "#fff",
      },
    },
    typography: {
      xlh1: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "2rem",
          // fontSize: "2.5rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "2rem",
        },
      },
      h1: {
        fontFamily: "Arciform",
        // letterSpacing: "2px",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.875rem",
          // fontSize: "2rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.875rem",
        },
      },
      h2: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.75rem",
          // fontSize: "1.875rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.75rem",
        },
      },
      h3: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.625rem",
          // fontSize: "1.75rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.625rem",
        },
      },
      h4: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.5rem",
          // fontSize: "1.625rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.5rem",
        },
      },
      h5: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.375rem",
          // fontSize: "1.5rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.375rem",
        },
      },
      subtitle1: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.25rem",
          // fontSize: "1.375rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.25rem",
        },
      },
      subtitle2: {
        fontFamily: "Arciform",
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.125rem",
          // fontSize: "1.25rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "1.125rem",
        },
      },
      body1: {
        fontFamily: ["Comfortaa", "cursive"].join(","),
        [theme.breakpoints.up("xl")]: {
          fontSize: "0.875rem",
          // fontSize: "1rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "0.875rem",
        },
      },
      body2: {
        fontFamily: ["Comfortaa", "cursive"].join(","),
        [theme.breakpoints.up("xl")]: {
          fontSize: "0.75rem",
          // fontSize: "0.875rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "0.75rem",
        },
      },
      body3: {
        fontFamily: ["Comfortaa", "cursive"].join(","),
        [theme.breakpoints.up("xl")]: {
          fontSize: "0.625rem",
          // fontSize: "0.75rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "0.625rem",
        },
      },
      button: {
        fontFamily: ["Comfortaa", "cursive"].join(","),
        textTransform: "none",
        [theme.breakpoints.up("xl")]: {
          fontSize: "0.875rem",
          // fontSize: "1rem",
        },
        [theme.breakpoints.down("xl")]: {
          fontSize: "0.875rem",
        },
      },
    },
  };
};

export let theme = createTheme();

theme = createTheme(theme, themeSettings(theme));
