import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientRootLayout from "./client-root-layout";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jay Panchal",
  description: "Jay Panchal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#212121] transition-colors duration-500`}
      >
        {/* ✅ Wrap entire app inside ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ Global Navigation (floating dock + MagicUI toggler) */}
          <Navigation />

          {/* ✅ Your client-side layout and main content */}
          <ClientRootLayout>{children}</ClientRootLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}