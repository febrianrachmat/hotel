import type { FooterContent, LocationInfo, SocialLink } from "@/types";

export const locationInfo: LocationInfo = {
  address: "1 VELMONT Boulevard, Marina District",
  city: "Capri Bay",
  country: "Italy",
  phone: "+39 081 555 0198",
  email: "concierge@velmont.com",
  coordinates: { lat: 40.551, lng: 14.242 },
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=14.230%2C40.545%2C14.254%2C40.557&layer=mapnik&marker=40.551%2C14.242",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    platform: "facebook",
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    platform: "twitter",
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    platform: "linkedin",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

export const footerContent: FooterContent = {
  tagline: "Extraordinary Stays. Timeless Elegance.",
  navigation: [
    { label: "Suites & Villas", href: "#suites" },
    { label: "Spa & Wellness", href: "#amenities" },
    { label: "Fine Dining", href: "#dining" },
    { label: "Gallery", href: "#gallery" },
    { label: "Book a Stay", href: "/book" },
    { label: "FAQ", href: "#faq" },
  ],
  contact: {
    address: locationInfo.address,
    phone: locationInfo.phone,
    email: locationInfo.email,
  },
  social: socialLinks,
};
