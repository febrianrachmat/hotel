"use client";

import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { INTRO_STORAGE_KEY } from "./loading-screen";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [animateEntry, setAnimateEntry] = useState(true);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_STORAGE_KEY) === "true") {
        setAnimateEntry(false);
      }
    } catch {
      setAnimateEntry(false);
    }
  }, []);

  return (
    <motion.div
      initial={animateEntry ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
