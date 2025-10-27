"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Preloader from "@/components/preloader";

export default function ClientRootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // start fade/blur transition
      setIsTransitioning(true);
      // remove preloader after animation completes
      setTimeout(() => setIsLoading(false), 800);
    }, 2500); // show preloader for 2.5s

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <>
      {/* === PRELOADER SCREEN === */}
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "#ffffff dark:#212121",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.8s ease",
            opacity: isTransitioning ? 0 : 1,
            pointerEvents: isTransitioning ? "none" : "auto",
          }}
        >
          <Preloader />
        </div>
      ) : null}

      {/* === ACTUAL APP CONTENT === */}
      <div
        className={`page-content ${isTransitioning ? "show" : ""}`}
        style={{
          filter: isLoading ? "blur(10px)" : "none",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease, filter 1s ease",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </div>
    </>
  );
}
