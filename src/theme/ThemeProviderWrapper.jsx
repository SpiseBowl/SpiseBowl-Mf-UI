import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(() => getTheme(mode), [mode]);
  const contextValue = useMemo(
    () => ({ mode, toggleTheme }),
    [mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProviderWrapper, ThemeContext };
