import type { AvailabilityStatus, DayAvailability } from "@/types";

/** Deterministic mock availability — no backend required */
function hashDate(date: Date): number {
  const str = date.toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getAvailabilityForDate(date: Date): AvailabilityStatus {
  const day = date.getDay();
  const hash = hashDate(date);

  if (day === 0 || day === 6) {
    if (hash % 5 === 0) return "sold-out";
    if (hash % 3 === 0) return "limited";
    return "available";
  }

  if (hash % 7 === 0) return "sold-out";
  if (hash % 4 === 0) return "limited";
  return "available";
}

export function getAvailabilityRange(
  startDate: Date,
  days: number
): DayAvailability[] {
  const result: DayAvailability[] = [];

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    result.push({
      date: date.toISOString().slice(0, 10),
      status: getAvailabilityForDate(date),
    });
  }

  return result;
}

export const availabilityLabels: Record<
  AvailabilityStatus,
  { label: string; className: string }
> = {
  available: {
    label: "Available",
    className: "text-emerald-400",
  },
  limited: {
    label: "Limited Availability",
    className: "text-champagne",
  },
  "sold-out": {
    label: "Sold Out",
    className: "text-red-400",
  },
};

export const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6+ Guests" },
];
