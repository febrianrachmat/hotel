"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HOVER_SELECTOR = "a, button, [data-cursor-hover], input, select, textarea";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (reducedMotion) return;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setVisible(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) setHovering(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const related = e.relatedTarget as HTMLElement | null;
      if (
        target?.closest(HOVER_SELECTOR) &&
        !related?.closest(HOVER_SELECTOR)
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [cursorX, cursorY, reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden mix-blend-difference md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{
            width: hovering ? 48 : 12,
            height: hovering ? 48 : 12,
            x: hovering ? -24 : -6,
            y: hovering ? -24 : -6,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="rounded-full border border-white bg-white/20 backdrop-blur-sm"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{
            opacity: hovering ? 1 : 0.4,
            x: -2,
            y: -2,
          }}
          className="size-1 rounded-full bg-champagne"
        />
      </motion.div>
    </>
  );
}
