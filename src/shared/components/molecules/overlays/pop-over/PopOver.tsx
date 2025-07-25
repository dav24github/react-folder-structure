import React from "react";

export const PopOver = ({ control, children }:any) => {
  return (
    <PopoverMUI
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
