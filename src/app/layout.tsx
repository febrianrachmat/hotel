import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/design-tokens";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} | Luxury Hotel & Resort`,
  description: brand.tagline,
  keywords: [
    "luxury hotel",
    "premium resort",
    "VELMONT",
    "boutique hospitality",
  ],
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-bg-deep font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
