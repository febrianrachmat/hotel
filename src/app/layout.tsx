import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionProvider } from "@/components/layout/motion-provider";
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
    "frontend portfolio",
  ],
  authors: [{ name: "VELMONT Portfolio" }],
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website",
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen overflow-x-hidden bg-bg-deep font-sans antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
