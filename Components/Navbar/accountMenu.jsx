import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useRouter } from "next/router";

const accountMenu = ({ anchorEl, menuId, handleMenuClose }) => {
  const router = useRouter();
  const isMenuOpen = Boolean(anchorEl);

  const logOut = () => {
    localStorage.removeItem("auth-token-fintra");
    router.replace("/login");
    handleMenuClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={logOut}>Cerrar sesion</MenuItem>
    </Menu>
  );
};

export default accountMenu;
