import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "./theme";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProviderWrapper>
  </StrictMode>
);
