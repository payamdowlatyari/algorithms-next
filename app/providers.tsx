"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Providers wraps the entire app with
 * 1. NextUIProvider to provide the NextUI CSS Variables
 * 2. NextThemesProvider to provide the next-themes context
 * @param children The app component tree
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
