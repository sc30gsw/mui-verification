import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { baseTheme } from "../src/theme";
import AppProviders from "../src/providers/AppProviders";

import type { Preview } from "@storybook/react";

const themeForStorybook = createTheme(
  {
    components: {
      MuiDialog: {
        defaultProps: {
          disablePortal: true,
          disableScrollLock: true,
          hideBackdrop: true,
          sx: { position: "initial" },
        },
      },
    },
  },
  baseTheme,
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <AppProviders>
        <ThemeProvider theme={themeForStorybook}>
          <Story />
        </ThemeProvider>
      </AppProviders>
    ),
  ],
};

export default preview;
