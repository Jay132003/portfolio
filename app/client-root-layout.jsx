"use client";

import { ThemeProvider } from "@/components/theme-provider";

export default function ClientRootLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
