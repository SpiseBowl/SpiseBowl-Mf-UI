import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const getTheme = (mode) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: { main: "#FF6B35", contrastText: "#ffffff" },
      secondary: { main: "#3A86FF", contrastText: "#ffffff" },
      error: { main: "#E63946", contrastText: "#ffffff" },
      warning: { main: "#FFB703", contrastText: "#ffffff" },
      success: { main: "#4CAF50", contrastText: "#ffffff" },
      info: { main: "#2196F3", contrastText: "#ffffff" },

      ...(mode === "light"
        ? {
            background: { default: "#F8F9FA", paper: "#FFFFFF" },
            text: { primary: "#212529", secondary: "#6C757D" },
            divider: "#E0E0E0",
          }
        : {
            background: { default: "#121212", paper: "#1E1E1E" },
            text: { primary: "#E0E0E0", secondary: "#A0A0A0" },
            divider: "#333333",
          }),
    },

    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        "@media (max-width:960px)": { fontSize: "2.25rem" },
        "@media (max-width:600px)": { fontSize: "2rem" },
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        "@media (max-width:960px)": { fontSize: "1.85rem" },
        "@media (max-width:600px)": { fontSize: "1.75rem" },
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        "@media (max-width:960px)": { fontSize: "1.6rem" },
        "@media (max-width:600px)": { fontSize: "1.5rem" },
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 500,
        "@media (max-width:960px)": { fontSize: "1.35rem" },
        "@media (max-width:600px)": { fontSize: "1.25rem" },
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        "@media (max-width:960px)": { fontSize: "1.1rem" },
        "@media (max-width:600px)": { fontSize: "1rem" },
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 500,
        "@media (max-width:960px)": { fontSize: "0.9rem" },
        "@media (max-width:600px)": { fontSize: "0.875rem" },
      },
      body1: {
        fontSize: "1rem",
        "@media (max-width:960px)": { fontSize: "0.95rem" },
        "@media (max-width:600px)": { fontSize: "0.875rem" },
      },
      body2: {
        fontSize: "0.875rem",
        "@media (max-width:960px)": { fontSize: "0.825rem" },
        "@media (max-width:600px)": { fontSize: "0.75rem" },
      },
      subtitle1: { fontSize: "1rem" },
      subtitle2: { fontSize: "0.875rem" },
      button: { textTransform: "none", fontWeight: 600 },
      caption: { fontSize: "0.75rem" },
    },

    // shape: { borderRadius: 12 },
    spacing: 8,

    components: {
      // MuiCssBaseline: {
      //   styleOverrides: {
      //     body: {
      //       transition:
      //         "background-color 0.08s ease-in-out, color 0.08s ease-in-out",
      //     },
      //     "*": {
      //       transition:
      //         "background-color 0.08s ease-in-out, color 0.08s ease-in-out, border-color 0.08s ease-in-out",
      //     },
      //   },
      // },

      // Button Component
      MuiButton: {
        defaultProps: { variant: "contained", color: "primary" },
        styleOverrides: {
          root: {
            borderRadius: "8px",
            padding: "10px 16px",
            transition: "0.3s",
          },
          sizeMicro: {
            padding: "5px 10px",
            fontSize: "0.8rem",
            borderRadius: "7px",
          },
        },
      },

      // AppBar Component
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#ffffff" : "#1E1E1E",
            color: mode === "light" ? "#000" : "#fff",
          },
        },
      },

      // Typography Component
      MuiTypography: {
        styleOverrides: {
          root: {
            // color: mode === "light" ? "#212529" : "#E0E0E0",
          },
        },
      },

      // Card Component
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: mode === "light" ? "#fff" : "#1E1E1E",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
            padding: "12px",
            borderRadius: "8px",
            [theme.breakpoints.up("md")]: {
              padding: "24px",
            },
          }),
        },
      },

      // TextField Component
      MuiTextField: {
        defaultProps: { variant: "outlined" },
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              height: "45px",
              "& input": {
                padding: "8px 14px",
              },
            },
            "& .MuiInputBase-root.MuiInputBase-multiline": {
              height: "auto",
              padding: "8px 14px",
            },
            "& .MuiOutlinedInput-root": {
              height: "45px",
            },
            "& .MuiOutlinedInput-root.MuiInputBase-multiline": {
              height: "auto",
            },
          },
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: {
            transform: "translate(14px, 11px) scale(1)",
          },
          shrink: {
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      },

      // Form Control (select, radio, checkbox)
      MuiFormControl: {
        styleOverrides: {
          // root: { marginBottom: "16px", marginTop: "16px" },
          // root: {
          //   "& .MuiInputBase-root": {
          //     height: "45px",
          //   },
          //   "& .MuiInputBase-input": {
          //     height: "45px",
          //     padding: "8px 14px",
          //   },
          // },
        },
      },

      // Select Component
      MuiSelect: {
        styleOverrides: {
          root: {
            // backgroundColor: mode === "light" ? "#fff" : "#333",
            color: mode === "light" ? "#000" : "#fff",
            borderRadius: "8px",
            height: "45px",
          },
          // select: {
          //   height: "45px",
          //   padding: "8px 14px",
          // },
        },
      },

      // Checkbox Component
      MuiCheckbox: {
        styleOverrides: {
          root: {
            // color: mode === "light" ? "#FF6B35" : "#FF6B35",
            "&.Mui-checked": {
              color: "#FF6B35",
            },
          },
        },
      },

      // Radio Button Component
      MuiRadio: {
        styleOverrides: {
          root: {
            // color: mode === "light" ? "#FF6B35" : "#FF6B35",
            "&.Mui-checked": {
              color: "#FF6B35",
            },
          },
        },
      },

      // Slider Component
      MuiSlider: {
        styleOverrides: {
          root: {
            // color: mode === "light" ? "#FF6B35" : "#FF6B35",
          },
        },
      },

      // Switch Component
      MuiSwitch: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "#FF6B35",
            },
          },
        },
      },

      // Divider Component
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#E0E0E0" : "#333",
          },
        },
      },

      // Paper Component
      MuiPaper: {
        styleOverrides: {
          root: {
            // backgroundColor: mode === "light" ? "#fff" : "#1E1E1E",
          },
        },
      },

      // Dialog Component
      MuiDialog: {
        styleOverrides: {
          paper: {
            // backgroundColor: mode === "light" ? "#fff" : "#333",
          },
        },
      },

      // Table Components
      MuiTable: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#fff" : "#333",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: "12px",
            color: mode === "light" ? "#212529" : "#E0E0E0",
          },
        },
      },

      // Chip Component
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: "6px", fontWeight: 600 },
        },
      },

      // List Item Component
      MuiListItem: {
        styleOverrides: {
          root: { borderRadius: "8px", transition: "0.3s" },
        },
      },

      // Snackbar Component
      MuiSnackbar: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#6C757D" : "#E0E0E0",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#6C757D" : "#E0E0E0",
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};
