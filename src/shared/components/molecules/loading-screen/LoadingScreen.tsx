import React from "react";

export const LoadingScreen = () => {
  return (
    <>
      {(isLoading || display) && (
        <>
          {!noBackdrop && createPortal(<Backdrop dark />, portalElement!)}
          {createPortal(
            <div className={clsx(styles.root)}>
              <CircularProgress thickness={4} size={iconSize} color={color} />
            </div>,
            portalElement!
          )}
        </>
      )}
    </>
  );
};
