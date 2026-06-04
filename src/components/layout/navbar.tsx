"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { mainNavigation } from "@/data/navigation";
import { brand } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-luxury-strong py-3 shadow-luxury"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-[1920px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-24">
          <Link
            href="/"
            className="group flex flex-col gap-0.5"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-heading text-2xl tracking-[0.15em] text-foreground transition-colors group-hover:text-champagne md:text-3xl">
              {brand.name}
            </span>
            <span className="hidden text-[10px] tracking-[0.25em] text-text-muted uppercase sm:block">
              {brand.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
            {mainNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="editorial-spacing relative text-[11px] text-text-muted transition-colors hover:text-champagne after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className={cn(
                buttonVariants(),
                "hidden rounded-none px-6 tracking-[0.15em] uppercase sm:inline-flex"
              )}
            >
              Book Stay
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center border border-white/10 text-foreground transition-colors hover:border-champagne/40 hover:text-champagne lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-bg-deep/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {mainNavigation.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                className="font-heading text-3xl text-foreground transition-colors hover:text-champagne"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-4 rounded-none px-8 tracking-[0.15em] uppercase"
            )}
          >
            Book Your Stay
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
