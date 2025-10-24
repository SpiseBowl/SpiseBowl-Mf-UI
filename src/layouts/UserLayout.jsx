import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { Footer, NavBar, NavDock } from "../user";
import { NAV_DOCK_HEIGHT } from "../user/constant";
import { LogoutDialog } from "../sharedComp/dialogs";

function UserLayout({ children, version = "0.0.0", profileData = {} }) {
  // // local state
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <>
      <NavBar
        version={version}
        profileData={profileData}
        openLogoutDialog={() => setOpenLogoutModal(true)}
      />
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

      <LogoutDialog
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        title="Ready to log out?"
        description="You’ll be logged out of your account. Don’t worry, we’ll keep your session safe so you can log back in anytime."
        confirmLabel="Yes, Log Me Out"
        cancelLabel="Cancel"
      />
    </>
  );
}

export default UserLayout;

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
  profileData: PropTypes.object,
};
