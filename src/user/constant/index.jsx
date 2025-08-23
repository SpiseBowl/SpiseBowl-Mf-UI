import {
  MenuBook,
  FoodBank,
  Home,
  ContactPhone,
  ShoppingBag,
  Settings,
} from "@mui/icons-material";

export const NAV_DOCK_HEIGHT = 64;

export const navItems = [
  {
    label: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    label: "Our Menu",
    path: "/our-menu",
    icon: <MenuBook />,
  },
  {
    label: "About Us",
    path: "/about-us",
    icon: <FoodBank />,
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    icon: <ContactPhone />,
  },
];

export const mobileNavItems = [
  ...navItems.slice(0, 3),
  {
    label: "My Orders",
    path: "/my-orders",
    icon: <ShoppingBag />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings />,
    child: [
      {
        label: "Edit Profile",
        path: "/settings/edit-profile",
      },
      { label: "Change Password", path: "/settings/change-password" },
      { label: "Manage Addresses", path: "/settings/manage-addresses" },
    ],
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    icon: <ContactPhone />,
  },
];
