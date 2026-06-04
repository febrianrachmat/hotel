"use client";

import { FadeInView } from "./fade-in-view";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeInView
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="editorial-spacing mb-4">{eyebrow}</p>
      <h2 className="font-heading text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
          {description}
        </p>
      )}
    </FadeInView>
  );
}
