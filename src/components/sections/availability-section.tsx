"use client";

import { useMemo, useState } from "react";
import { format, eachDayOfInterval, isBefore, startOfDay } from "date-fns";
import type { DateRange } from "react-day-picker";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Users, BedDouble, Search } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import {
  availabilityLabels,
  getAvailabilityForDate,
  guestOptions,
} from "@/data/availability";
import { roomTypeOptions } from "@/data/rooms";
import type { AvailabilityStatus } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

function getStatusDotClass(status: AvailabilityStatus): string {
  switch (status) {
    case "available":
      return "bg-emerald-400";
    case "limited":
      return "bg-champagne";
    case "sold-out":
      return "bg-red-400";
  }
}

export function AvailabilitySection() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(roomTypeOptions[0]?.value ?? "");

  const today = startOfDay(new Date());

  const selectedNights = useMemo(() => {
    if (!range?.from || !range?.to) return [];
    return eachDayOfInterval({ start: range.from, end: range.to }).slice(0, -1);
  }, [range]);

  const rangeSummary = useMemo(() => {
    if (selectedNights.length === 0) return null;
    const statuses = selectedNights.map((d) => getAvailabilityForDate(d));
    const hasSoldOut = statuses.includes("sold-out");
    const hasLimited = statuses.includes("limited");
    const overall: AvailabilityStatus = hasSoldOut
      ? "sold-out"
      : hasLimited
        ? "limited"
        : "available";
    return { nights: selectedNights.length, statuses, overall };
  }, [selectedNights]);

  return (
    <section id="booking" className="border-t border-white/5 bg-bg-deep section-padding">
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Reservations"
          title="Plan Your Stay"
          description="Select your dates and preferences. Availability updates in real time for your chosen residence."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Booking panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-luxury-strong shadow-luxury p-8 md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label className="editorial-spacing flex items-center gap-2 text-[10px]">
                  <BedDouble className="size-3.5" />
                  Room Type
                </Label>
                <Select value={roomType} onValueChange={(v) => v && setRoomType(v)}>
                  <SelectTrigger className="w-full rounded-none border-white/10 bg-white/5">
                    <SelectValue placeholder="Select room" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypeOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="editorial-spacing flex items-center gap-2 text-[10px]">
                  <Users className="size-3.5" />
                  Guests
                </Label>
                <Select value={guests} onValueChange={(v) => v && setGuests(v)}>
                  <SelectTrigger className="w-full rounded-none border-white/10 bg-white/5">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {guestOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="editorial-spacing flex items-center gap-2 text-[10px]">
                  <CalendarDays className="size-3.5" />
                  Duration
                </Label>
                <div className="flex h-8 items-center border border-white/10 bg-white/5 px-3 text-sm text-text-muted">
                  {range?.from && range?.to
                    ? `${format(range.from, "MMM d")} — ${format(range.to, "MMM d, yyyy")}`
                    : "Select dates on calendar →"}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
              {(Object.keys(availabilityLabels) as AvailabilityStatus[]).map(
                (status) => (
                  <div key={status} className="flex items-center gap-2">
                    <span
                      className={cn("size-2 rounded-full", getStatusDotClass(status))}
                    />
                    <span className="text-xs text-text-muted">
                      {availabilityLabels[status].label}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Selection summary */}
            <AnimatePresence mode="wait">
              {rangeSummary && (
                <motion.div
                  key={rangeSummary.overall}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 overflow-hidden border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs tracking-[0.15em] text-text-muted uppercase">
                    {rangeSummary.nights} night{rangeSummary.nights !== 1 ? "s" : ""}{" "}
                    selected
                  </p>
                  <p
                    className={cn(
                      "mt-2 font-heading text-xl",
                      availabilityLabels[rangeSummary.overall].className
                    )}
                  >
                    {availabilityLabels[rangeSummary.overall].label}
                  </p>
                  <ul className="mt-3 max-h-32 space-y-1 overflow-y-auto">
                    {selectedNights.map((night) => {
                      const status = getAvailabilityForDate(night);
                      return (
                        <li
                          key={night.toISOString()}
                          className="flex items-center justify-between text-xs text-text-muted"
                        >
                          <span>{format(night, "EEE, MMM d")}</span>
                          <span className={availabilityLabels[status].className}>
                            {availabilityLabels[status].label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <Link
              href="/book"
              data-cursor-hover
              className={cn(
                buttonVariants(),
                "mt-8 flex w-full items-center justify-center gap-2 rounded-none tracking-[0.15em] uppercase",
                rangeSummary?.overall === "sold-out" && "pointer-events-none opacity-50"
              )}
            >
              <Search className="size-4" />
              Check Availability
            </Link>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glass-luxury w-full max-w-fit p-4 md:p-6">
              <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={1}
                disabled={(date) =>
                  isBefore(date, today) ||
                  getAvailabilityForDate(date) === "sold-out"
                }
                modifiers={{
                  available: (date) =>
                    getAvailabilityForDate(date) === "available",
                  limited: (date) =>
                    getAvailabilityForDate(date) === "limited",
                }}
                modifiersClassNames={{
                  available:
                    "[&_button]:after:absolute [&_button]:after:bottom-0.5 [&_button]:after:left-1/2 [&_button]:after:size-1 [&_button]:after:-translate-x-1/2 [&_button]:after:rounded-full [&_button]:after:bg-emerald-400",
                  limited:
                    "[&_button]:after:absolute [&_button]:after:bottom-0.5 [&_button]:after:left-1/2 [&_button]:after:size-1 [&_button]:after:-translate-x-1/2 [&_button]:after:rounded-full [&_button]:after:bg-champagne",
                }}
                className="rounded-none"
              />
              <p className="mt-4 text-center text-xs text-text-muted">
                Sold out dates are unavailable for selection
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
