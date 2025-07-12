import { ProfileButton } from "../../molecules/profile-popover/DropdownButton";

export const MainToolbar = () => {
  const handlePerfil = () => {
    navigate(`${UrlRoutes.PROFILE}/${user.username}`);
  };
  const handleLogout = () => {
    logout();
  };
  const handleChangePassword = () => {
    handleGoTo("change-password-profile");
  };

  const profileMenu = (
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
    <Box>
      {/* Any */}
      <Box></Box>

      {/* Profile button */}
      <Box ref={button} className={styles.label}>
        <Avatar />
        <MyTypography variant="body2">{user.name}</MyTypography>
      </Box>
      <Popover
        open={openPopOver}
        anchorEl={button.current}
        position="bottom-left"
      >
        {profileMenu}
      </Popover>
    </Box>
  );
};
