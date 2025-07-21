'use client';

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Providers wraps the entire app with
 * 1. HeroUIProvider to provide the NextUI CSS Variables
 * 2. NextThemesProvider to provide the next-themes context
 * @param children The app component tree
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
