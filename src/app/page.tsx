import { SiteShell } from "@/components/layout/site-shell";
import {
  AboutSection,
  AmenitiesSection,
  AvailabilitySection,
  ContactSection,
  DiningSection,
  ExperiencesSection,
  FaqSection,
  FeaturedRoomsSection,
  GallerySection,
  HeroSection,
  ReviewsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <FeaturedRoomsSection />
      <AvailabilitySection />
      <GallerySection />
      <ReviewsSection />
      <AmenitiesSection />
      <DiningSection />
      <ExperiencesSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </SiteShell>
  );
}
