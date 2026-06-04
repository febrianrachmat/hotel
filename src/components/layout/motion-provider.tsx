"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
