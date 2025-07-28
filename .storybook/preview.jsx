import { MemoryRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { themes } from "storybook/theming";

import { ThemeProviderWrapper } from "../src/theme";

export const globalTypes = {
  themeMode: {
    name: "Theme Mode",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "sun", title: "Light Mode" },
        { value: "dark", icon: "moon", title: "Dark Mode" },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { themeMode } = context.globals;
    return (
      <MemoryRouter>
        <ThemeProviderWrapper mode={themeMode}>
          <Box sx={{ minHeight: "30vh" }}>
            <Story />
          </Box>
        </ThemeProviderWrapper>
      </MemoryRouter>
    );
  },
];

export const parameters = {
  initialGlobals: {
    // viewport: { value: "ipad", isRotated: false },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    codePanel: true,
    theme: themes.dark,
  },

  viewport: {
    options: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      order: ["Introduction", "Layouts", "Components", "Pages"],
    },
  },
};
