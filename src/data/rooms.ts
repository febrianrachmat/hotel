import type { Room } from "@/types";

export const rooms: Room[] = [
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    slug: "presidential-suite",
    description:
      "An expansive sanctuary of refined grandeur with panoramic city views, private terrace, and bespoke butler service.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    ],
    capacity: 4,
    size: "180 m²",
    rating: 5.0,
    pricePerNight: 2450,
    amenities: ["Private Butler", "Terrace", "Jacuzzi", "City View"],
    featured: true,
  },
  {
    id: "ocean-view-villa",
    name: "Ocean View Villa",
    slug: "ocean-view-villa",
    description:
      "Secluded coastal elegance with floor-to-ceiling glass, infinity plunge pool, and uninterrupted ocean horizons.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    ],
    capacity: 2,
    size: "120 m²",
    rating: 4.9,
    pricePerNight: 1890,
    amenities: ["Ocean View", "Private Pool", "Outdoor Shower", "Mini Bar"],
    featured: true,
  },
  {
    id: "royal-penthouse",
    name: "Royal Penthouse",
    slug: "royal-penthouse",
    description:
      "The pinnacle of urban luxury — dual-level living, curated art collection, and a private rooftop lounge.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928123-c32242e63f39?w=1200&q=80",
    ],
    capacity: 6,
    size: "320 m²",
    rating: 5.0,
    pricePerNight: 4200,
    amenities: ["Rooftop Lounge", "Art Collection", "Chef's Kitchen", "Helipad Access"],
    featured: true,
  },
  {
    id: "deluxe-garden-room",
    name: "Deluxe Garden Room",
    slug: "deluxe-garden-room",
    description:
      "Serene botanical views, warm natural textures, and thoughtful details for an intimate luxury retreat.",
    image:
      "https://images.unsplash.com/photo-1611892440502-42faecaf6f44?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1611892440502-42faecaf6f44?w=1200&q=80",
      "https://images.unsplash.com/photo-1595577505425-775d5f4b4368?w=1200&q=80",
    ],
    capacity: 2,
    size: "55 m²",
    rating: 4.8,
    pricePerNight: 680,
    amenities: ["Garden View", "Rain Shower", "Nespresso", "Turndown Service"],
    featured: true,
  },
];

export const roomTypeOptions = rooms.map((room) => ({
  value: room.id,
  label: room.name,
}));

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}
