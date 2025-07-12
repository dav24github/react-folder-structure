import { Box } from "@mui/material";
import React from "react";

export const CardBody = ({ children }: any) => {
  return (
    <Box flexDirection="column" gap="20px">
      {children}
    </Box>
  );
};
