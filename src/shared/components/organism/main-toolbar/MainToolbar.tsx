import { Box } from "@mui/material";
import { Button } from "../../atoms/buttons/button/Button";
import { Typography } from "../../atoms/typography/Typography";
import { PopOver } from "../../molecules/overlays/pop-over/PopOver";
import { ItemButton } from "../../atoms/buttons/item-button/ItemButton";
import { ListContainer } from "../containers/list-container/ListContainer";

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
    <ListContainer>
      <ItemButton onClick={handlePerfil} disableRipple>
        Perfil
      </ItemButton>
      <ItemButton onClick={handleChangePassword} disableRipple>
        Cambiar contraseña
      </ItemButton>
      <ItemButton onClick={handleLogout} disableRipple>
        Cerrar sesión
      </ItemButton>
    </ListContainer>
  );

  return (
    <Box>
      {/* Any */}
      <Box></Box>

      {/* Profile button */}
      <Button ref={button} endIcon="arrow-down">
        <Box className={styles.label}>
          <Avatar />
          <Typography variant="body2">{user.name}</Typography>
        </Box>
      </Button>
      <PopOver
        open={openPopOver}
        anchorEl={button.current}
        position="bottom-left"
      >
        {profileMenu}
      </PopOver>
    </Box>
  );
};
