import React from "react";

export const PopOverButton = ({ control, children }) => {
  return (
    <Popover
      open={true}
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={!noClose ? handleClose : () => {}}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      className={styles.popover}
      sx={extraStyle}
      elevation={4}
    >
      {children}
    </Popover>
  );
};
