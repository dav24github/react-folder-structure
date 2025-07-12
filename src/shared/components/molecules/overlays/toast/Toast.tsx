import { Box } from "@mui/material";

export const Toast = () => {
  return (
    <Box>
      {/* tag-left-color */}
      <Box></Box>

      {/* Header */}
      <Box>
        <MyTypography>{title}</MyTypography>
        <IconButton icon="close" onClick={handleClose} />
      </Box>

      {/* Body */}
      <MyTypography variant="body2">{msg}</MyTypography>
    </Box>
  );
};
