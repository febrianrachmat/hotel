"use client";

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
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer />}
      <FloatingBookButton />
    </>
  );
}
