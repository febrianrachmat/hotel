"use client";

import { ScrollProgress } from "@/components/shared/scroll-progress";
import { CustomCursor } from "./custom-cursor";
import { FloatingBookButton } from "./floating-book-button";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading-screen";
import { Navbar } from "./navbar";

interface SiteShellProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export function SiteShell({ children, showFooter = true }: SiteShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:border focus:border-champagne focus:bg-bg-deep focus:px-4 focus:py-2 focus:text-sm focus:text-champagne"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main id="main-content">{children}</main>
      {showFooter && <Footer />}
      <FloatingBookButton />
    </>
  );
}
