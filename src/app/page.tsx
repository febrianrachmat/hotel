import { SiteShell } from "@/components/layout/site-shell";
import {
  AvailabilitySection,
  FeaturedRoomsSection,
  GallerySection,
  HeroSection,
} from "@/components/sections";

const sectionPlaceholders = [
  { id: "amenities", label: "Luxury Amenities" },
  { id: "dining", label: "Dining" },
  { id: "experiences", label: "Experiences" },
  { id: "about", label: "Our Story" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <FeaturedRoomsSection />
      <AvailabilitySection />
      <GallerySection />

      {sectionPlaceholders.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-[40vh] items-center justify-center border-t border-white/5 section-padding"
        >
          <div className="text-center">
            <p className="editorial-spacing mb-3">Coming Soon</p>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">
              {section.label}
            </h2>
          </div>
        </section>
      ))}
    </SiteShell>
  );
}
