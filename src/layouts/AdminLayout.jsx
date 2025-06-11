import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  MenuItem,
  Popover,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  DashboardTwoTone,
  ManageAccountsTwoTone,
  FastfoodTwoTone,
  DeliveryDiningTwoTone,
  PaymentsTwoTone,
  SupportAgentTwoTone,
  DarkMode,
  LightMode,
  Info,
  Logout,
  AccountCircle,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeProviderWrapper";
import { Logo } from "../assets";

function AdminLayout({ children, version, openLogoutDialog }) {
  // // initial state
  const drawerWidth = 270;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // // local setup
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardTwoTone />, path: "/" },
    {
      text: "User Management",
      icon: <ManageAccountsTwoTone />,
      path: "/user-management",
    },
    {
      text: "Dish Management",
      icon: <FastfoodTwoTone />,
      path: "/dish-management",
    },
    {
      text: "Order Management",
      icon: <DeliveryDiningTwoTone />,
      path: "/order-management",
    },
    {
      text: "Payment Management",
      icon: <PaymentsTwoTone />,
      path: "/payment-management",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Toolbar
      // sx={{ minHeight: { xs: 70, md: 80 } }}
      />
      <List>
        {menuItems.map((menu) => (
          <NavLink
            key={menu.text}
            to={menu.path}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setMobileOpen(false)}
          >
            {({ isActive }) => (
              <ListItemButton
                sx={{
                  color: isActive && theme.palette.primary.main,
                  backgroundColor: isActive
                    ? mode === "light"
                      ? "rgba(0, 0, 0, 0.04)"
                      : "rgba(255, 255, 255, 0.08)"
                    : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive && theme.palette.primary.main,
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.text}
                  sx={{
                    span: {
                      color: isActive && theme.palette.primary.main,
                    },
                  }}
                />
              </ListItemButton>
            )}
          </NavLink>
        ))}
      </List>
      <List sx={{ marginTop: "auto" }}>
        <Divider />
        <NavLink
          key="Support"
          to="/support"
          onClick={() => setMobileOpen(false)}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SupportAgentTwoTone />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItemButton>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
        //  sx={{ py: 1.5 }}
        >
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            flexGrow={1}
            sx={{
              textAlign: { xs: "center", md: "left" },
              svg: {
                width: { xs: 160, md: 200 },
                height: "auto",
              },
            }}
            onClick={() => navigate("/")}
          >
            <Logo />
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="User Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src="https://mui.com/static/images/avatar/2.jpg"
                  sx={{ cursor: "pointer" }}
                />
              </IconButton>
            </Tooltip>

            <Popover
              id="user-menu"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{ sx: { minWidth: 180 } }}
            >
              <MenuItem disabled>
                <ListItemIcon>
                  <Info fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Version: {version}</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/profile");
                }}
              >
                <ListItemIcon>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Profile</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  openLogoutDialog();
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Logout</Typography>
              </MenuItem>
            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Permanent Drawer for Large Screens */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          ml: { md: `${drawerWidth}px` },
          minWidth: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 50 } }} />

        {children}
      </Box>
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired || PropTypes.number.isRequired,
  openLogoutDialog: PropTypes.func.isRequired,
};

export default AdminLayout;
