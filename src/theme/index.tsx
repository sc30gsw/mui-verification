import { createTheme } from "@mui/material/styles";

import RenderDayColored from "./RenderDayColored";

import type {} from "@mui/x-date-pickers/themeAugmentation";

export const baseTheme = createTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
  components: {
    MuiDatePicker: {
      defaultProps: {
        format: "yyyy/MM/dd",
        orientation: "portrait",
        slotProps: {
          toolbar: { toolbarPlaceholder: "__", toolbarFormat: "yyyy年M月dd日" },
        },
        slots: { day: RenderDayColored },
      },
    },
  },
});
