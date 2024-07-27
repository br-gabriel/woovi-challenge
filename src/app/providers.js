"use client";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "@/theme/customTheme";
import InstallmentContextProvider from "@/contexts/installmentContext";

export function Providers({ children }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <InstallmentContextProvider>{children}</InstallmentContextProvider>
    </ThemeProvider>
  );
}
