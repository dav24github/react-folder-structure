import React from "react";

export const ProfileButton = () => {
  const handlePerfil = () => {
    navigate(`${UrlRoutes.PROFILE}/${user.username}`);
  };
  const handleLogout = () => {
    logout();
  };
  const handleChangePassword = () => {
    handleGoTo("change-password-profile");
  };

  const menu = (
    <Box>
      <MenuItem onClick={handlePerfil} disableRipple>
        Perfil
      </MenuItem>
      <MenuItem onClick={handleChangePassword} disableRipple>
        Cambiar contraseña
      </MenuItem>
      <MenuItem onClick={handleLogout} disableRipple>
        Cerrar sesión
      </MenuItem>
    </Box>
  );

  return (
    <ButtonPopOver arrowIcon menu={menu}>
      <Box className={styles.label}>
        <Avatar />
        <MyTypography variant="body2">{user.name}</MyTypography>
      </Box>
    </ButtonPopOver>
  );
};
