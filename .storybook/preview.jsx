import { MemoryRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

import { ThemeProviderWrapper } from "../src/theme";

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <ThemeProviderWrapper>
        <Box sx={{ minHeight: "30vh" }}>
          <Story />
        </Box>
      </ThemeProviderWrapper>
    </MemoryRouter>
  ),
];

export const parameters = {
  initialGlobals: {
    // viewport: { value: "ipad", isRotated: false },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    codePanel: true,
  },
  viewport: {
    options: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Documentation",
        "Layouts",
        "Components",
        "Pages",
      ],
    },
  },
};
