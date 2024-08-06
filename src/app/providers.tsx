"use client";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "@/theme/customTheme";
import InstallmentContextProvider from "@/contexts/installmentContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <InstallmentContextProvider>{children}</InstallmentContextProvider>
    </ThemeProvider>
  );
}
