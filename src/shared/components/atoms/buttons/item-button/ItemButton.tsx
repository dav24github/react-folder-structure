import React from "react";
import { Button } from "../button/Button";
import { Box } from "@mui/material";

export const ItemButton = ({ label, startIcon, endIcon }: any) => {
  // variant: text by default
  return (
    <Box className={classes.root}>
      <Button>ItemButton</Button>
    </Box>
  );
};
