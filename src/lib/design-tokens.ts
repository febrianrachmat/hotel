/** VELMONT luxury design tokens — single source for TS/JS usage */
export const colors = {
  luxuryBlack: "#111111",
  warmIvory: "#F8F5F0",
  champagneGold: "#C6A972",
  textPrimary: "#FFFFFF",
  textMuted: "#D1D1D1",
  bgDeep: "#0A0A0A",
  bgElevated: "#121212",
} as const;

export const brand = {
  name: "VELMONT",
  tagline: "Extraordinary Stays. Timeless Elegance.",
  heroHeadline: "A Sanctuary of Timeless Luxury",
  heroSubtext:
    "Experience extraordinary stays crafted for unforgettable moments.",
} as const;

export const fonts = {
  heading: "var(--font-heading)",
  body: "var(--font-sans)",
} as const;
