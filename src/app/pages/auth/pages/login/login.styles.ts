import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useLoginStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    position: "relative",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  },
  bgImg: {
    position: "absolute",
    top: 0,
    bottom: "initial",
    left: 0,
    width: "auto",
    height: "100%",
  },
  titleBanner: {
    ["& h1"]: {
      fontSize: "58px",
    },
  },

  right: {
    flex: 1.5,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  logo: {
    width: "130px",
    ["& img"]: {
      width: "100%",
    },
  },
  form: {
    marginTop: 60,
    "& button[type=submit]": {
      marginTop: "10px !important",
    },
  },
  linkPass: {
    textDecoration: "none",
  },
}));
