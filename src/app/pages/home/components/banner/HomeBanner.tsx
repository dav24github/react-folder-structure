import React from "react";

export const HomeBanner = () => {
  return (
    <Box className={classes.root}>
      <img className={classes.img} src={WelcomeIMG} alt="welcome" />
      <Box className={classes.title}>
        <Typography color="primary">¡Bienvenido!</Typography>
      </Box>
    </Box>
  );
};
