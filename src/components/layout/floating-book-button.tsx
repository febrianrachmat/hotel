"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays } from "lucide-react";

export function FloatingBookButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-6 bottom-6 z-50 md:right-10 md:bottom-10"
        >
          <Link
            href="/book"
            data-cursor-hover
            className="group flex items-center gap-3 border border-champagne/30 bg-bg-deep/90 px-5 py-3.5 shadow-luxury-lg backdrop-blur-xl transition-all hover:border-champagne hover:shadow-[0_24px_64px_rgb(198_169_114/15%)]"
          >
            <CalendarDays className="size-4 text-champagne transition-transform group-hover:scale-110" />
            <span className="text-xs tracking-[0.2em] text-foreground uppercase">
              Book Stay
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
