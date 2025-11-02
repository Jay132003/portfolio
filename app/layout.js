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
          {/* ✅ Floating dock and theme toggler */}
          <Navigation />

          {/* ✅ Remove all side spacing — full width layout */}
          <main className="w-full min-h-screen !m-0 !p-0 overflow-x-hidden">
            <ClientRootLayout>{children}</ClientRootLayout>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
