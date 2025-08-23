import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { Footer, NavBar, NavDock } from "../user";
import { NAV_DOCK_HEIGHT } from "../user/constant";

function UserLayout({ children, version = "0.0.0" }) {
  return (
    <>
      <NavBar version={version} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pb: { xs: `${+NAV_DOCK_HEIGHT + 40}px`, md: `${+NAV_DOCK_HEIGHT}px` },
        }}
      >
        {children}
      </Box>
      <NavDock />
      <Footer />
    </>
  );
}

export default UserLayout;

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
};
