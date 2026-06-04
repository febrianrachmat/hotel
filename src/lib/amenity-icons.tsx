import {
  Waves,
  Palmtree,
  Sparkles,
  UtensilsCrossed,
  Car,
  ConciergeBell,
  type LucideIcon,
} from "lucide-react";

const amenityIconMap: Record<string, LucideIcon> = {
  Waves,
  Palmtree,
  Sparkles,
  UtensilsCrossed,
  Car,
  ConciergeBell,
};

export function getAmenityIcon(name: string): LucideIcon {
  return amenityIconMap[name] ?? Sparkles;
}
