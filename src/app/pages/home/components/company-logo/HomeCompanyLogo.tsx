import { Box } from "@mui/material";
import React from "react";

/*
 * Button => provide ripple effect
 *        => without props allows any
 * ImageBox is a styled-component
 */
export const HomeCompanyLogo = () => {
  return (
    <Box className={classes.root}>
      <Button>
        <HoverOverlay icon="edit">
          <ImageBox>
            <img src={company.logo} alt="Logo" />
          </ImageBox>
        </HoverOverlay>
      </Button>
    </Box>
  );
};
