import React from "react";

export const PopUp = () => {
  return (
    <Box>
      {/* Header */}
      <Box>
        <SVG />
        <MyTypography color={color as TColor} variant="h1">
          {title}
        </MyTypography>
      </Box>

      {/* Body */}
      <Box>
        <MyTypography variant="body1" center>
          {withFontWeightReview(msg)}
        </MyTypography>
      </Box>

      {/* Footer */}
      <Box>
        <MyButton></MyButton>
      </Box>
    </Box>
  );
};
