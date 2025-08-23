import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Collapse,
  styled,
} from "@mui/material";
import { More, Close, ExpandMore } from "@mui/icons-material";
import { mobileNavItems, NAV_DOCK_HEIGHT } from "./constant";

// Rotate icon with transition
const ExpandMoreIcon = styled(ExpandMore)(({ theme, expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NavDock() {
  const navigate = useNavigate();

  const [value, setValue] = useState(mobileNavItems[0].path);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const handleChange = (event, newValue) => {
    if (newValue === "More") {
      setOpen(true);
    } else {
      setValue(newValue);
      navigate(newValue);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      {/* Bottom Navigation */}
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          display: { md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          maxHeight: `${NAV_DOCK_HEIGHT}px`,
          zIndex: 1200,
        }}
      >
        {mobileNavItems.slice(0, 3).map((item, index) => (
          <BottomNavigationAction
            key={index + 1}
            label={item.label}
            value={item.path}
            icon={item.icon}
            sx={{
              "@media (max-width: 350px)": { px: 0 },
              "@media (min-width: 351px) and (max-width: 420px)": { px: 0.5 },
            }}
          />
        ))}
        <BottomNavigationAction label="More" value="More" icon={<More />} />
      </BottomNavigation>

      {/* Bottom Drawer */}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            p: 2,
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">More Options</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        {/* Extra Navigation Items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {mobileNavItems.slice(3).map((item, index) => (
            <Box key={index + 1} sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  if (item.child) {
                    setExpanded((prev) =>
                      prev === item.label ? null : item.label
                    );
                  } else {
                    navigate(item.path);
                    handleClose();
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  <Typography variant="body1">{item.label}</Typography>
                </Box>
                {item.child && (
                  <ExpandMoreIcon expand={expanded === item.label ? 1 : 0} />
                )}
              </Box>

              {/* Child Items */}
              {item.child && (
                <Collapse
                  in={expanded === item.label}
                  timeout="auto"
                  unmountOnExit
                  sx={{ mt: 0.6 }}
                >
                  <Box
                    sx={{
                      pl: 5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    {item.child.map((sub, subIndex) => (
                      <Typography
                        key={subIndex + 1}
                        variant="body1"
                        sx={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate(sub.path);
                          handleClose();
                        }}
                      >
                        {sub.label}
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}

          <Box
            sx={{
              mt: 2,
              "& a": {
                px: 0,
                py: 0.5,
                display: "block",
              },
            }}
          >
            <Button component={Link} to="/privacy-policy" variant="body1">
              Privacy Policy
            </Button>
            <Button component={Link} to="/terms-and-conditions" variant="body1">
              Terms & Conditions
            </Button>
            <Button component={Link} to="/faq-support" variant="body1">
              Faq & Support
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default NavDock;
