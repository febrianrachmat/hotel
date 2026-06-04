export type AvailabilityStatus = "available" | "limited" | "sold-out";

export type GalleryCategory =
  | "rooms"
  | "dining"
  | "spa"
  | "resort"
  | "pool";

export type BookingStep = "room" | "guest" | "summary" | "success";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "twitter" | "linkedin";
  href: string;
  label: string;
}

export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  capacity: number;
  size: string;
  rating: number;
  pricePerNight: number;
  amenities: string[];
  featured?: boolean;
}

export interface Review {
  id: string;
  guestName: string;
  country: string;
  avatar: string;
  rating: number;
  text: string;
  stayDate: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  hours: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  tag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AboutContent {
  headline: string;
  subheadline: string;
  paragraphs: string[];
  image: string;
  stats: { label: string; value: string }[];
}

export interface LocationInfo {
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  mapEmbedUrl: string;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface BookingSelection {
  roomId: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  roomType: string;
}

export interface DayAvailability {
  date: string;
  status: AvailabilityStatus;
}

export interface FooterContent {
  tagline: string;
  navigation: NavLink[];
  contact: Pick<LocationInfo, "address" | "phone" | "email">;
  social: SocialLink[];
}
