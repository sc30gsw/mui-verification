import { ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ja } from "date-fns/locale";

import { baseTheme } from "../theme";

import type { ReactNode } from "react";

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja}
        dateFormats={{
          monthAndYear: "yyyy年 MM月",
          year: "yyyy年",
        }}
        localeText={{
          previousMonth: "前の月",
          nextMonth: "次の月",
          cancelButtonLabel: "キャンセル",
          okButtonLabel: "閉じる",
        }}
      >
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default AppProviders;
