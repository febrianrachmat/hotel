"use client";

import { Check } from "lucide-react";
import type { BookingStep } from "@/types";
import { cn } from "@/lib/utils";

const steps: { id: BookingStep; label: string }[] = [
  { id: "room", label: "Select Room" },
  { id: "guest", label: "Guest Info" },
  { id: "summary", label: "Summary" },
  { id: "success", label: "Confirmed" },
];

interface BookingProgressProps {
  currentStep: BookingStep;
}

export function BookingProgress({ currentStep }: BookingProgressProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <nav aria-label="Booking progress" className="w-full">
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = step.id === currentStep;

          return (
            <li
              key={step.id}
              className="flex flex-1 flex-col items-center gap-2 last:flex-none"
            >
              <div className="flex w-full items-center">
                {index > 0 && (
                  <div
                    className={cn(
                      "h-px flex-1 transition-colors duration-500",
                      isComplete || isCurrent
                        ? "bg-champagne"
                        : "bg-white/10"
                    )}
                  />
                )}
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center border text-xs transition-all duration-500",
                    isComplete
                      ? "border-champagne bg-champagne text-primary-foreground"
                      : isCurrent
                        ? "border-champagne bg-champagne/10 text-champagne"
                        : "border-white/20 bg-transparent text-text-muted"
                  )}
                >
                  {isComplete ? (
                    <Check className="size-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "h-px flex-1 transition-colors duration-500",
                      isComplete ? "bg-champagne" : "bg-white/10"
                    )}
                  />
                )}
              </div>
              <span
                className={cn(
                  "hidden text-[10px] tracking-[0.12em] uppercase sm:block",
                  isCurrent ? "text-champagne" : "text-text-muted"
                )}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
