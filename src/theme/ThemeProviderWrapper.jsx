import { createContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./";
import { cookies } from "../utility";

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children, mode: externalMode }) => {
  const currentTheme = cookies.getCookie("user_theme")?.toLocaleLowerCase();
  const [mode, setMode] = useState(externalMode || currentTheme || "dark");

  useEffect(() => {
    if (externalMode) setMode(externalMode);
  }, [externalMode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  const contextValue = useMemo(() => ({ mode, toggleTheme }), [mode]);

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
  mode: PropTypes.oneOf(["light", "dark"]),
};

export { ThemeProviderWrapper, ThemeContext };
